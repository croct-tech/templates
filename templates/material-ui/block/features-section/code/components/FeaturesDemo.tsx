'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { FeaturesSection, type FeaturesSectionProps} from "?/./FeaturesSection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function FeaturesDemo(props: FeaturesSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <FeaturesSection {...props} />
    </AppTheme>
  )
}
