import { Button } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
import { useCallback } from "react"
import { Bosses } from "../data/bosses"
import { Locations } from "../data/locations"
import { Pokemons } from "../data/pokemons"
import { Routes } from "../data/routes"
import { StepOrder } from "../data/steps"
import { useCurrentVersionId } from "../state/current_version"
import { useEncounters } from "../state/encounters"
import type { Boss } from "../types/boss"
import type { Location } from "../types/location"
import type { Route } from "../types/route"
import type { Pokemon } from "../types/pokemon"
import { lookup } from "../types/util"

export function ExportButton() {
  const currentVersionId = useCurrentVersionId()
  const encounters = useEncounters()
  const { copy } = useClipboard()

  const handleClick = useCallback(() => {
    const lines: string[] = []

    if (encounters == null) {
      return
    }

    for (const step of StepOrder) {
      if (step.version != null && step.version !== currentVersionId) {
        continue
      }

      if (step.type === "boss") {
        const boss = lookup<Boss>(Bosses, step.boss)
        const levelCap = Math.max(...boss.team.map((teamMember) => teamMember.level))
        lines.push(`${boss.name} (CAP: ${levelCap})`)
      }

      if (step.type === "route") {
        const route = lookup<Route>(Routes, step.route)
        const location = lookup<Location>(Locations, route.location)

        const encounter = encounters[step.route]
        if (encounter == null) {
          lines.push(`${location.name}: Unknown`)
          continue
        }

        const pokemon = lookup<Pokemon>(Pokemons, encounter.pokemonId)
        const routeEncounter = route.encounters.find((x) => x.pokemon === encounter.pokemonId)
        if (routeEncounter == null) {
          lines.push(`${location.name}: Unknown`)
          continue
        }

        const levels =
          routeEncounter.minLevel === routeEncounter.maxLevel
            ? `${routeEncounter.minLevel}`
            : `${routeEncounter.minLevel}-${routeEncounter.maxLevel}`
        lines.push(`${location.name}: ||${pokemon.name} (${levels})||`)
      }
    }

    copy(lines.join("\n"))
  }, [copy, currentVersionId, encounters])

  return <Button onClick={handleClick}>Export for Discord</Button>
}
