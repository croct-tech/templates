'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useColorScheme } from "@mui/material/styles";

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export type TestimonialsSection = {
  title: string,
  description?: string,
  testimonials: Array<{
    quote: string,
    quotee: {
      name: string,
      role: string,
      avatar: string,
      logo: {
        dark: string,
        light: string
      }
    }
  }>
}

export function TestimonialsSection(props: TestimonialsSection) {
  const {title, description, testimonials} = props;
  const theme = useColorScheme();

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
          marginTop: "10em",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        )}
      </Box>
      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.quote}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={<Avatar alt={testimonial.quotee.name} src={testimonial.quotee.avatar} />}
                  title={testimonial.quotee.name}
                  subheader={testimonial.quotee.role}
                />
                <img
                  src={theme.mode === 'light' ? testimonial.quotee.logo.light : testimonial.quotee.logo.dark}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
