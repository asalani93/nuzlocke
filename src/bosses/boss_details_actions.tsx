import { ActionIcon, Button, Center, Group, Menu } from "@mantine/core"
import { useCallback } from "react"
import { IconDots, IconRefresh } from "@tabler/icons-react"
import { useCompleteBoss, useFailBoss, useResetBoss } from "../state/boss_progression"
import type { BossId } from "../types/boss"
import { StepStatus, useProgressForBossStep } from "../state/step_status"

export interface BossDetailsActionsProps {
  bossId: BossId
}

export function BossDetailsActions({ bossId }: BossDetailsActionsProps) {
  const completeBoss = useCompleteBoss()
  const handleCompleteBoss = useCallback(() => {
    completeBoss(bossId)
  }, [bossId, completeBoss])

  const failBoss = useFailBoss()
  const handleFailBoss = useCallback(() => {
    failBoss(bossId)
  }, [bossId, failBoss])

  const resetBoss = useResetBoss()
  const handleResetBoss = useCallback(() => {
    resetBoss(bossId)
  }, [bossId, resetBoss])

  const bossProgress = useProgressForBossStep(bossId)
  const locked = bossProgress === StepStatus.LOCKED

  return (
    <>
      <Center>
        <Group gap="xs">
          <Button disabled={locked} onClick={handleCompleteBoss} size="xs" variant="default">
            Win
          </Button>
          <Button disabled={locked} onClick={handleFailBoss} size="xs" variant="default">
            Loss
          </Button>
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon disabled={locked} size={28} variant="default">
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconRefresh size={14} />} onClick={handleResetBoss}>
                Reset
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Center>
    </>
  )
}
