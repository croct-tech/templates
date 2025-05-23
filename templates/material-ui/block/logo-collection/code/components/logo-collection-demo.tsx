'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { LogoCollection, type LogoCollectionProps} from "?/./logo-collection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function LogoCollectionDemo(props: LogoCollectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <LogoCollection {...props} />
    </AppTheme>
  )
}
