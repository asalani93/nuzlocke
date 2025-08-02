import fs from "fs/promises";

const data = (await fs.readFile("./data/encounters.txt")).toString();

const result = data
  .split(/\n(?=\w)/)
  .map((section) => {
    const splitPoint = section.indexOf("\n");
    const location = section.slice(0, splitPoint).trim();
    const sectionRest = section.slice(splitPoint + 1);

    const encounters = sectionRest
      .split("\n")
      .flatMap((row) => {
        const cells1 = row
          .trim()
          .replace(/^\{\{(.*)}}$/, "$1")
          .replaceAll(/<.*?\/>/g, "")
          .replaceAll(/\{\{([^|]*?)}}/g, "$1")
          .replaceAll(/\[\[([^|]*?)]]/g, "$1")
          .replaceAll(/\[\[.*?\|(.*?)]]/g, "$1");
        const cells = cells1.split("|").filter((x) => x != null);
        if (cells[0] !== "Catch/entry9") {
          return [];
        }
        const args = cells.filter((x) => !x.includes("=")).slice(1);
        const name = args[1]
          .replace("&nbsp;", " ")
          .replace(" ", "_")
          .replaceAll("é", "e");
        const scarlet = args[2] === "yes";
        const violet = args[3] === "yes";
        const [min, max] = args[4].split("-").map((x) => Number(x));
        const weight = Number(args[5]);
        return [{ name, scarlet, violet, min, max: max ?? min, weight }];
      })
      .reduce((prev, curr) => {
        const existing = prev.find((x) => x.name === curr.name);
        if (existing) {
          existing.weight = Math.max(existing.weight, curr.weight);
          existing.min = Math.min(existing.min, curr.min);
          existing.max = Math.max(existing.max, curr.max);
          return prev;
        } else {
          return [...prev, curr];
        }
      }, [])
      .map((row) => {
        const versions = [];
        if (row.scarlet) {
          versions.push("Versions.SCARLET");
        }
        if (row.violet) {
          versions.push("Versions.VIOLET");
        }
        return `      { pokemon: Pokemons.${row.name.toUpperCase()}.id, weight: ${
          row.weight
        }, versions: [${versions.join(", ")}], minLevel: ${
          row.min
        }, maxLevel: ${row.max} },`;
      })
      .sort()
      .join("\n");

    return `  ${location}: route("${location}", {
    location: Locations.${location}.id,
    encounters: [
${encounters}
    ]
  }),`;
  })
  .join("\n");

fs.writeFile("./data/encounters.out.txt", result);
