import { createVersion, createVersionTable } from "../utils"

export const Version = createVersionTable({
  SCARLET: createVersion("SCARLET", { name: "Pokémon Scarlet" }),
  VIOLET: createVersion("VIOLET", { name: "Pokémon Violet" }),
})
