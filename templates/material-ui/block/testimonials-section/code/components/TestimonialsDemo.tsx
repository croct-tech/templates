'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { TestimonialsSection, type TestimonialsSectionProps} from "?/./TestimonialsSection.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"
import { AppAppBar } from "?/./AppBar.{js,jsx,ts,tsx}"

export function TestimonialsDemo(props: TestimonialsSectionProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <TestimonialsSection {...props} />
    </AppTheme>
  )
}
