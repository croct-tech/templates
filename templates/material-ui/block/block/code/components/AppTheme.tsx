'use client';

import {useMemo, type ReactNode} from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import type { ThemeOptions } from "@mui/material/styles"
import { inputsCustomizations } from "?/./theme/inputs.{js,jsx,ts,tsx}"
import { dataDisplayCustomizations } from "?/./theme/dataDisplay.{js,jsx,ts,tsx}"
import { feedbackCustomizations } from "?/./theme/feedback.{js,jsx,ts,tsx}"
import { navigationCustomizations } from "?/./theme/navigation.{js,jsx,ts,tsx}"
import { surfacesCustomizations } from "?/./theme/surfaces.{js,jsx,ts,tsx}"
import { colorSchemes, typography, shadows, shape } from "?/./theme/themePrimitives.{js,jsx,ts,tsx}"

interface AppThemeProps {
  children: ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
