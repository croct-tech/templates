'use client';

import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import InputLabel from "@mui/material/InputLabel"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import visuallyHidden from "@mui/utils/visuallyHidden"
import {styled} from "@mui/material/styles"
import {renderMarkdown} from "?/**/*/markdown.{js,jsx,ts,tsx}"

export type HeroSectionProps = {
  heading: string,
  tagline: string,
  form: {
    ctaLabel: string,
    inputLabel: string,
  },
  note?: string,
  images?: {
    dark: string,
    light: string,
  },
  onSubmit?: (email: string) => void,
}


type HeroImageProps = {
  images: {
    light: string;
    dark: string;
  };
};

const HeroImage = styled('div', {
  shouldForwardProp: (prop) => prop !== 'images',
})<HeroImageProps>(({ theme, images }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${images.light})`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${images.dark})`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export function HeroSection(props: HeroSectionProps) {
  const {heading, tagline, form, note, images} = props;
  const [email, setEmail] = useState('');

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: {xs: 14, sm: 20},
          pb: {xs: 8, sm: 12},
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{alignItems: 'center', width: {xs: '100%', sm: '70%'}}}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              whiteSpace: 'pre',
              flexDirection: {xs: 'column', sm: 'row'},
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {renderMarkdown(heading, {
              bold: {
                variant: 'h1',
                sx: theme => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })
              }
            })}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: {sm: '100%', md: '80%'},
            }}
          >
            {tagline}
          </Typography>
          <Stack
            component="form"
            onSubmit={(event) => {
              event.preventDefault();
              props.onSubmit?.(email);
            }}
            direction={{xs: 'column', sm: 'row'}}
            spacing={1}
            useFlexGap
            sx={{pt: 2, width: {xs: '100%', sm: '350px'}}}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              {form.inputLabel}
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label={form.inputLabel}
              placeholder="Your email address"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': {form.inputLabel},
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              sx={{minWidth: 'fit-content'}}
            >
              {form.ctaLabel}
            </Button>
          </Stack>
          {note && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{textAlign: 'center'}}
            >
              {renderMarkdown(note, {
                link: {
                  color: 'primary',
                },
              })}
            </Typography>
          )}
        </Stack>
        {images && (<HeroImage images={images} id="image"/>)}
      </Container>
    </Box>
  );
}
