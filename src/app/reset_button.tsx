import { Button, Group, Modal, Text } from "@mantine/core"
import { useCallback } from "react"
import { useResetAllBossProgression } from "../state/boss_progression"
import { useResetAllEncounters } from "../state/encounters"
import { useDisclosure } from "@mantine/hooks"

export function ResetButton() {
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure()

  const resetAllBossProgression = useResetAllBossProgression()
  const resetAllEncounters = useResetAllEncounters()

  const handleClick = useCallback(() => {
    openModal()
  }, [openModal])

  const handleReset = useCallback(() => {
    resetAllBossProgression()
    resetAllEncounters()
    closeModal()
  }, [closeModal, resetAllBossProgression, resetAllEncounters])

  return (
    <>
      <Button onClick={handleClick}>Reset All</Button>
      <Modal opened={modalOpened} onClose={closeModal} title="Are you sure?">
        <Text>
          Reseting will clear all encounter data and boss progression. This operation cannot be
          undone!
        </Text>
        <Group justify="center" mt="md">
          <Button onClick={handleReset} color="red">
            Yes
          </Button>
          <Button onClick={closeModal} variant="default">
            No
          </Button>
        </Group>
      </Modal>
    </>
  )
}
