'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { PricingSection, type PricingSectionProps} from "?/./PricingSection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function PricingDemo(props: PricingSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <PricingSection {...props} />
    </AppTheme>
  )
}
