import { writeFile } from "fs/promises"
import * as path from "path"
import * as url from "url"

import { Ability } from "./scarlet_violet/abilities"
import { Boss } from "./scarlet_violet/bosses"
import { Evolution } from "./scarlet_violet/evolutions"
import { Location } from "./scarlet_violet/locations"
import { Move } from "./scarlet_violet/moves"
import { Pokemon } from "./scarlet_violet/pokemon"
import { Route } from "./scarlet_violet/routes"
import { Step } from "./scarlet_violet/steps"
import { Version } from "./scarlet_violet/versions"

export async function buildScarletViolet() {
  const body = {
    abilities: Object.values(Ability),
    bosses: Object.values(Boss),
    defaultVersion: Version.SCARLET.id,
    evolutions: Object.values(Evolution),
    locations: Object.values(Location),
    moves: Object.values(Move),
    pokemon: Object.values(Pokemon),
    routes: Object.values(Route),
    steps: Object.values(Step),
    versions: Object.values(Version),
  }

  const fileContents = JSON.stringify(body, null, 2)

  const currentFile = url.fileURLToPath(import.meta.url)
  const currentDirectory = path.dirname(currentFile)
  const filePath = path.join(currentDirectory, "../../src/data/scarlet_violet.json")

  await writeFile(filePath, fileContents, { encoding: "utf8" })
}

await buildScarletViolet()
