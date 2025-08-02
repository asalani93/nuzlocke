import { createVersionTable, version } from "../types/version";

export const Versions = createVersionTable({
  SCARLET: version("SCARLET", { name: "Pokémon Scarlet" }),
  VIOLET: version("VIOLET", { name: "Pokémon Violet" }),
});
