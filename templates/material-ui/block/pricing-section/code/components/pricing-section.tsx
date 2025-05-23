'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

type PricingCardProps = {
  name: string,
  price: {
    value: number,
    frequency: 'month' | 'year'
  },
  features: string[],
  cta: string,
  recommended?: boolean,
}

export type PricingSectionProps = {
  title: string,
  description?: string,
  plans: PricingCardProps[],
}

export function PricingSection(props: PricingSectionProps) {
  const {title, description, plans} = props;
  return (
    <Container
      id="pricing"
      sx={{
        pt: {xs: 4, sm: 12},
        pb: {xs: 8, sm: 16},
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: {xs: 3, sm: 6},
      }}
    >
      <Box
        sx={{
          width: {sm: '100%', md: '60%'},
          textAlign: {sm: 'left', md: 'center'},
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{color: 'text.primary'}}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" sx={{color: 'text.secondary'}}>
          {description}
          </Typography>
        )}
      </Box>
      <Grid
        container
        spacing={3}
        sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}
      >
        {plans.map((tier) => (
          <Grid
            size={{xs: 12, sm: 6, md: 4}}
            key={tier.name}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                tier.recommended &&
                  ((theme) => ({
                    border: 'none',
                    background:
                      'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles('dark', {
                      background:
                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                    }),
                  })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '5em',
                      gap: 2,
                    },
                    tier.recommended ? {color: 'grey.100'} : {color: ''},
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.name}
                  </Typography>
                  {tier.recommended && (
                    <Chip icon={<AutoAwesomeIcon/>} label='Recommended'/>
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                    tier.recommended ? {color: 'grey.50'} : {color: null},
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price.value}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per {tier.price.frequency}
                  </Typography>
                </Box>
                <Divider sx={{my: 2, opacity: 0.8, borderColor: 'divider'}}/>
                {tier.features.map((line) => (
                  <Box
                    key={line}
                    sx={{py: 1, display: 'flex', gap: 1.5, alignItems: 'center'}}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.recommended ? {color: 'primary.light'} : {color: 'primary.main'},
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[
                        tier.recommended ? {color: 'grey.50'} : {color: null},
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.recommended ? 'contained' : 'outlined'}
                  color={tier.recommended ? 'secondary' : 'primary'}
                >
                  {tier.cta}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
