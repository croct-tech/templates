'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { FAQSection, type FAQSectionProps} from "?/./faq-section.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function FAQDemo(props: FAQSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <FAQSection {...props} />
    </AppTheme>
  )
}
