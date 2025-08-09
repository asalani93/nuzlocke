import { ActionIcon, Center, Skeleton, Stack, Text, Tooltip } from "@mantine/core"
import { EncounterStatus, useEncounterForRoute, useRevealEncounter } from "../state/encounters"
import type { RouteId } from "../types/route"
import { useCallback, useMemo } from "react"
import { StepStatus, useProgressForRouteStep } from "../state/step_status"
import { usePokemon, useRoute } from "../app/hooks"
import { IconEye } from "@tabler/icons-react"
import { TypeDisplay } from "../common/type_display"

export interface RouteDetailsEncounterProps {
  routeId: RouteId
}

export function RouteDetailsEncounter({ routeId }: RouteDetailsEncounterProps) {
  const revealEncounter = useRevealEncounter()
  const handleRevealEncounter = useCallback(() => {
    revealEncounter(routeId)
  }, [revealEncounter, routeId])

  const encounter = useEncounterForRoute(routeId)
  if (encounter == null) {
    throw new Error("Encounter not found")
  }
  const pokemon = usePokemon(encounter.pokemonId)

  const routeStepStatus = useProgressForRouteStep(routeId)
  const hidden = encounter?.status === EncounterStatus.HIDDEN
  const locked = routeStepStatus === StepStatus.LOCKED

  const route = useRoute(routeId)
  const encounterData = useMemo(() => {
    return route.encounters.find((e) => e.pokemon === encounter.pokemonId)!
  }, [encounter, route])

  const levelData =
    encounterData.minLevel === encounterData.maxLevel
      ? `Level ${encounterData.minLevel}`
      : `Level ${encounterData.minLevel}\u2013${encounterData.maxLevel}`

  const revealOverlay =
    hidden && !locked ? (
      <Center className="absolute h-full w-full">
        <Tooltip label="Reveal" position="bottom" withArrow>
          <ActionIcon onClick={handleRevealEncounter} radius={24} size={36} variant="default">
            <IconEye height={24} />
          </ActionIcon>
        </Tooltip>
      </Center>
    ) : null

  const skeletonOverlay =
    hidden || locked ? (
      <Center className="absolute h-full w-full">
        <Stack align="center" gap={4}>
          <Skeleton animate={false} height={28} width={160} />
          <Skeleton animate={false} height={18} width={80} />
          <Skeleton animate={false} height={18} width={120} />
        </Stack>
      </Center>
    ) : null

  const content = (
    <Stack align="center" className={hidden || locked ? "invisible" : ""} gap="xs">
      <Text fw="bold" size="xl" ta="center">
        {hidden ? "\u00A0" : pokemon.name}
      </Text>
      <TypeDisplay type1={pokemon.type1} type2={pokemon.type2 ?? undefined} />
      <Text c="dimmed" size="sm" ta="center">
        {hidden ? "\u00A0" : levelData}
      </Text>
    </Stack>
  )

  return (
    <Stack className="relative">
      {content}
      {skeletonOverlay}
      {revealOverlay}
    </Stack>
  )
}
