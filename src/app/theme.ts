import { createTheme } from "@mantine/core"
import { useState } from "react"

export function useTheme() {
  const [theme] = useState(() => {
    return createTheme({
      headings: {
        sizes: {
          h1: {
            lineHeight: "1.5",
          },
          h2: {
            lineHeight: "1.5",
          },
          h3: {
            lineHeight: "1.25",
          },
          h4: {
            lineHeight: "1.25",
          },
          h5: {
            lineHeight: "1.125",
          },
          h6: {
            lineHeight: "1.125",
          },
        },
      },
      lineHeights: {
        xs: "normal",
        sm: "normal",
        md: "normal",
        lg: "normal",
        xl: "normal",
      },
    })
  })
  return theme
}
