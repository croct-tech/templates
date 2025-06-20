'use client';

import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeSelect } from '@/components/ColorModeSelect';
import { SignInCard } from '?/./SignInCard.{js,jsx,ts,tsx}';
import { Content, type ContentProps } from '?/./Content.{js,jsx,ts,tsx}';
import { AppTheme } from "?/./AppTheme.{js,jsx,ts,tsx}"

export function SignInSection(props: ContentProps) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Stack>
        <CssBaseline enableColorScheme />
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: 'center',
              height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
              marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
              minHeight: '100%',
            },
            (theme) => ({
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                zIndex: -1,
                inset: 0,
                backgroundImage:
                  'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                backgroundRepeat: 'no-repeat',
                ...theme.applyStyles('dark', {
                  backgroundImage:
                    'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                }),
              },
            }),
          ]}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: 2,
              mx: 'auto',
            }}
          >
            <Stack
              direction={{ xs: 'column-reverse', md: 'row' }}
              sx={{
                justifyContent: 'center',
                gap: { xs: 6, sm: 12 },
                p: { xs: 2, sm: 4 },
                m: 'auto',
              }}
            >
              <Content {...props} />
              <SignInCard />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </AppTheme>
  );
}
