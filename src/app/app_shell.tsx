import { MantineProvider } from "@mantine/core"
import type React from "react"

import { StateProvider } from "../state/state_provider"

import { useTheme } from "./theme"

export interface AppShellProps {
  children?: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const theme = useTheme()

  return (
    <StateProvider>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </StateProvider>
  )
}
