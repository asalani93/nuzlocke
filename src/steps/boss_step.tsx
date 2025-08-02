import { Card, CardHeader } from "@heroui/react";
import { useBoss } from "../app/hooks";
import { type BossStep } from "../types/step";
import { BossName } from "../bosses/boss_name";
import { BattleIcon } from "../common/battle_icon";

export interface BossStepProps {
  bossStep: BossStep;
}

export function BossStep({ bossStep }: BossStepProps) {
  const boss = useBoss(bossStep.boss);
  return (
    <Card>
      <CardHeader className="flex flex-row justify-start items-center gap-1">
        <BattleIcon />
        <span className="font-bold">Boss:</span>{" "}
        <BossName bossId={boss.id} inline />
      </CardHeader>
    </Card>
  );
}
