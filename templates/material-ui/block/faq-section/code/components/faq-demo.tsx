'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { FaqSection, type FaqSectionProps} from "?/./faq-section.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function FaqDemo(props: FaqSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <FaqSection {...props} />
    </AppTheme>
  )
}
