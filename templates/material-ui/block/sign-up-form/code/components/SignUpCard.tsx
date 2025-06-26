'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '?/./CustomIcons.{js,jsx,ts,tsx}';

export type FormProps = {
  heading: string,
  email: {
    placeholder: string,
    label: string,
  },
  password: {
    placeholder: string,
    label: string,
  },
  ctaLabel: string,
}

const Card = styled(MuiCard)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export function SignUpCard(props: FormProps) {
  const {heading, email, password, ctaLabel} = props;
  const [emailError] = useState(false);
  const [passwordError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Card variant="outlined">
      <Box sx={{display: {xs: 'flex', md: 'none'}}}>
        <SitemarkIcon/>
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
      >
        {heading}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 2}}
      >
        <FormControl>
          <FormLabel htmlFor="email">{email.label}</FormLabel>
          <TextField
            id="email"
            type="email"
            name="email"
            placeholder={email.placeholder}
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color='primary'
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">{password.label}</FormLabel>
          <TextField
            name="password"
            placeholder={password.placeholder}
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color='primary'
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained">
          {ctaLabel}
        </Button>
        <Typography sx={{textAlign: 'center'}}>
          Already have an account?{' '}
          <span>
            <Link
              href="#"
              variant="body2"
              sx={{alignSelf: 'center'}}
            >
              Sign in
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>or</Divider>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon/>}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon/>}
        >
          Sign in with Facebook
        </Button>
      </Box>
    </Card>
  );
}
