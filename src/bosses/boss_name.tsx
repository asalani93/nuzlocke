import { useBoss } from "../app/hooks";
import { Text } from "../common/text";
import type { BossId } from "../types/boss";

export interface BossNameProps {
  bossId: BossId;
  className?: string;
  inline?: boolean;
}

export function BossName({ bossId, className, inline }: BossNameProps) {
  const boss = useBoss(bossId);
  return (
    <Text className={className} inline={inline}>
      {boss.name}
    </Text>
  );
}
