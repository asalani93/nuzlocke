import { Button, Combobox, Group, InputBase, Modal, Stack, Text, useCombobox } from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"
import { useCallback, useMemo, useState } from "react"

import { useEncounterForRoute, useOverrideEncounter } from "../state/encounters_hooks"
import { useRoute, usePokemon } from "../state/game_data_hooks"
import type { RouteEncounter, RouteId } from "../types/route"

export interface RouteOverrideModalProps {
  onClose: () => void
  opened: boolean
  routeId: RouteId
}

export function RouteOverrideModal({ onClose, opened, routeId }: RouteOverrideModalProps) {
  const combobox = useCombobox()

  const route = useRoute(routeId)!
  const routeEncounter = useEncounterForRoute(routeId)
  if (routeEncounter == null) {
    throw new Error("fuck")
  }

  const [selectedEncounter, setSelectedEncounter] = useState(routeEncounter.pokemonId)
  const selectedPokemon = usePokemon(selectedEncounter)!
  const handleSelectOverride = useCallback(
    (routeEncounter: RouteEncounter) => {
      setSelectedEncounter(routeEncounter.pokemonId)
      combobox.closeDropdown()
    },
    [combobox, setSelectedEncounter]
  )

  const overrideEncounter = useOverrideEncounter()
  const handleApply = useCallback(() => {
    overrideEncounter(routeId, selectedEncounter)
    onClose()
  }, [onClose, overrideEncounter, routeId, selectedEncounter])

  const handleToggleDropdown = useCallback(() => {
    combobox.toggleDropdown()
  }, [combobox])

  const sortedEncounters = useMemo(() => {
    return [...route.encounters].sort((left, right) => {
      if (left.pokemonId < right.pokemonId) {
        return -1
      }
      if (left.pokemonId > right.pokemonId) {
        return 1
      }
      return 0
    })
  }, [route])
  const menuItems = sortedEncounters.map((routeEncounter) => {
    return (
      <RouteOverrideMenuItem
        active={routeEncounter.pokemonId === selectedEncounter}
        key={routeEncounter.pokemonId}
        onClick={handleSelectOverride}
        routeEncounter={routeEncounter}
      />
    )
  })

  return (
    <Modal onClose={onClose} opened={opened} size="xs" title="Override encounter">
      <Stack>
        <Combobox store={combobox}>
          <Combobox.Target>
            <InputBase
              component="button"
              type="button"
              pointer
              rightSection={<Combobox.Chevron />}
              rightSectionPointerEvents="none"
              onClick={handleToggleDropdown}
            >
              {selectedPokemon.name}
            </InputBase>
          </Combobox.Target>
          <Combobox.Dropdown>
            <Combobox.Options className="overflow-y-auto" mah={200}>
              {menuItems}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
        <Group justify="right">
          <Button onClick={onClose} variant="default">
            Close
          </Button>
          <Button onClick={handleApply}>Apply</Button>
        </Group>
      </Stack>
    </Modal>
  )
}

interface RouteOverrideMenuItemProps {
  active: boolean
  onClick: (routeEncounter: RouteEncounter) => void
  routeEncounter: RouteEncounter
}

function RouteOverrideMenuItem({ active, onClick, routeEncounter }: RouteOverrideMenuItemProps) {
  const pokemon = usePokemon(routeEncounter.pokemonId)!

  const handleClick = useCallback(() => {
    onClick(routeEncounter)
  }, [onClick, routeEncounter])

  return (
    <Combobox.Option active={active} onClick={handleClick} value={routeEncounter.pokemonId}>
      <Group justify="space-between">
        <Text>{pokemon.name}</Text>
        {active ? <IconCheck size={12} /> : null}
      </Group>
    </Combobox.Option>
  )
}
