'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { SignInSection, type SignInSectionProps} from "?/./sign-in-section.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"

export function SectionDemo(props: SignInSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInSection {...props} />
    </AppTheme>
  )
}
