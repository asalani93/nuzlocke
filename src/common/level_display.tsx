import { Text } from "@mantine/core"

interface LevelDisplayPropsSingle {
  level: number
}

interface LevelDisplayPropsRange {
  minLevel: number
  maxLevel: number
}

interface LevelDisplayPropsBase {
  short?: boolean
}

export type LevelDisplayProps = (LevelDisplayPropsSingle | LevelDisplayPropsRange) &
  LevelDisplayPropsBase

export function LevelDisplay(props: LevelDisplayProps) {
  const { short } = props
  const minLevel = "level" in props ? props.level : props.minLevel
  const maxLevel = "level" in props ? props.level : props.maxLevel

  const levelPrefix = short ? "Lv." : "Level"
  const levelValue = minLevel === maxLevel ? `${minLevel}` : `${minLevel} \u2013 ${maxLevel}`

  return (
    <Text c="dimmed" size="sm" ta="center">
      {levelPrefix} {levelValue}
    </Text>
  )
}
