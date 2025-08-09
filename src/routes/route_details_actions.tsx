import { ActionIcon, Button, Center, Group, Menu } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import type { RouteId } from "../types/route"
import {
  EncounterStatus,
  useCatchEncounter,
  useDefeatEncounter,
  useEncounterForRoute,
  useHideEncounter,
  useRerollEncounter,
} from "../state/encounters"
import { useCallback } from "react"
import { IconDice3, IconDots, IconEyeOff, IconPencil } from "@tabler/icons-react"
import { RouteOverrideModal } from "./route_override_modal"
import { useProgressForRouteStep } from "../state/step_status"

export interface RouteDetailsActionsProps {
  routeId: RouteId
}

export function RouteDetailsActions({ routeId }: RouteDetailsActionsProps) {
  const [overrideModalOpened, { open: openOverrideModal, close: closeOverrideModal }] =
    useDisclosure(false)

  const catchEncounter = useCatchEncounter()
  const handleCatchEncounter = useCallback(() => {
    catchEncounter(routeId)
  }, [catchEncounter, routeId])

  const defeatEncounter = useDefeatEncounter()
  const handleDefeatEncounter = useCallback(() => {
    defeatEncounter(routeId)
  }, [defeatEncounter, routeId])

  const rerollEncounter = useRerollEncounter()
  const handleRerollEncounter = useCallback(() => {
    rerollEncounter(routeId)
  }, [rerollEncounter, routeId])

  const hideEncounter = useHideEncounter()
  const handleHideEncounter = useCallback(() => {
    hideEncounter(routeId)
  }, [hideEncounter, routeId])

  const encounter = useEncounterForRoute(routeId)
  if (encounter == null) {
    throw new Error("Encounter not found")
  }

  const stepStatus = useProgressForRouteStep(routeId)
  const hidden = encounter?.status === EncounterStatus.HIDDEN || stepStatus === "LOCKED"

  return (
    <>
      <Center>
        <Group gap="xs">
          <Button disabled={hidden} onClick={handleCatchEncounter} size="xs" variant="default">
            Caught
          </Button>
          <Button disabled={hidden} onClick={handleDefeatEncounter} size="xs" variant="default">
            Defeated
          </Button>
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon disabled={hidden} size={28} variant="default">
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconDice3 size={14} />} onClick={handleRerollEncounter}>
                Reroll
              </Menu.Item>
              <Menu.Item leftSection={<IconPencil size={14} />} onClick={openOverrideModal}>
                Override
              </Menu.Item>
              <Menu.Item leftSection={<IconEyeOff size={14} />} onClick={handleHideEncounter}>
                Hide
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Center>
      <RouteOverrideModal
        onClose={closeOverrideModal}
        opened={overrideModalOpened}
        routeId={routeId}
      />
    </>
  )
}
