import { Button } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
import { useCallback } from "react"

import { useOrderedStepsForCurrentVersion } from "../state/current_version_hooks"
import { useEncounters } from "../state/encounters_hooks"
import {
  useBossLookup,
  useLocationLookup,
  usePokemonLookup,
  useRouteLookup,
} from "../state/game_data_hooks"
import { StepTypes } from "../types/step"

export function ExportButton() {
  const bossLookup = useBossLookup()
  const locationLookup = useLocationLookup()
  const pokemonLookup = usePokemonLookup()
  const routeLookup = useRouteLookup()

  const stepOrder = useOrderedStepsForCurrentVersion()
  const encounters = useEncounters()
  const { copy } = useClipboard()

  const handleClick = useCallback(() => {
    const lines: string[] = []

    if (encounters == null) {
      return
    }

    for (const step of stepOrder) {
      if (step.type === StepTypes.BOSS) {
        const boss = bossLookup(step.bossId)!
        const levelCap = Math.max(...boss.team.map((teamMember) => teamMember.level))
        lines.push(`${boss.name} (CAP: ${levelCap})`)
      }

      if (step.type === StepTypes.ROUTE) {
        const route = routeLookup(step.routeId)!
        const location = locationLookup(route.locationId)!

        const encounter = encounters[step.routeId]
        if (encounter == null) {
          lines.push(`${location.name}: Unknown`)
          continue
        }

        const pokemon = pokemonLookup(encounter.pokemonId)!
        const routeEncounter = route.encounters.find((x) => x.pokemonId === encounter.pokemonId)
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
  }, [bossLookup, copy, encounters, locationLookup, pokemonLookup, routeLookup, stepOrder])

  return <Button onClick={handleClick}>Export for Discord</Button>
}
