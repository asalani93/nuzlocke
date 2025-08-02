import { useMemo } from "react";
import {} from "tailwindcss";

export interface BattleIconProps {
  className?: string;
}

export function BattleIcon() {
  const style = useMemo(() => ({ verticalAlign: "-0.125em" } as const), []);

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4" stroke="black" stroke-width="2" />
      <path
        d="M12 0C18.6274 0 24 5.37258 24 12C24 12.3368 23.9852 12.6702 23.958 13H15.874C15.9563 12.6804 16 12.3453 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 12.3453 8.04371 12.6804 8.12598 13H0.0419922C0.0147856 12.6702 0 12.3368 0 12C0 5.37258 5.37258 0 12 0Z"
        fill="black"
      />
      <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2" />
    </svg>
  );
}
