'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { HeroSection, type HeroSectionProps} from "?/./HeroSection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function HeroDemo(props: HeroSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <HeroSection {...props} onSubmit={console.log} />
    </AppTheme>
  )
}
