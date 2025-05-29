'use client';

import CssBaseline from "@mui/material/CssBaseline"
import { Navbar, type NavbarProps} from "?/./navbar.{js,jsx,ts,tsx}"
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"

export function NavbarDemo(props: NavbarProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Navbar {...props} />
    </AppTheme>
  )
}
