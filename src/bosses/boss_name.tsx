import { Text } from "@mantine/core";
import { useBoss } from "../app/hooks";
import type { BossId } from "../types/boss";

export interface BossNameProps {
  bossId: BossId;
  className?: string;
  span?: boolean;
}

export function BossName({ bossId, className, span }: BossNameProps) {
  const boss = useBoss(bossId);
  return (
    <Text className={className} span={span}>
      {boss.name}
    </Text>
  );
}
