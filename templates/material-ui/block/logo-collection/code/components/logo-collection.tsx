'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useColorScheme } from "@mui/material/styles";

export type LogoCollectionProps = {
  title: string,
  logos: {
    dark: string,
    light: string,
  }[],
}

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export function LogoCollection(props: LogoCollectionProps) {
  const {title, logos} = props;
  const theme = useColorScheme();

  return (
    <Box id="logoCollection" sx={{ py: 4, marginTop: "10em" }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        {title}
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid key={index}>
            <img
              src={theme.mode === 'light' ? logo.light : logo.dark}
              alt={`Company logo number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
