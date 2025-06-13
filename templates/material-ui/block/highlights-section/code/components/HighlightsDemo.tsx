'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { HighlightsSection, type HighlightsSectionProps} from "?/./HighlightsSection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function HighlightsDemo(props: HighlightsSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <HighlightsSection {...props} />
    </AppTheme>
  )
}
