import { Checkbox } from "@mantine/core"
import React, { useCallback } from "react"

export interface CompletedButtonProps {
  checked?: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}

export function CompletedButton({ checked, disabled, onChange }: CompletedButtonProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked)
    },
    [onChange]
  )

  return (
    <Checkbox
      checked={checked ?? false}
      disabled={disabled ?? false}
      color="green"
      onChange={handleChange}
    />
  )
}
