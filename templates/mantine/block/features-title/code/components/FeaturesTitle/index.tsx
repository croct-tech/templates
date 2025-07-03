"use client";

import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '?/./index.module.css';

export type FeaturesTitleProps = {
  title: string,
  description?: string,
  cta: {
    label: string,
    link: string,
  },
  features: {
    icon?: 'receipt' | 'file' | 'cicle' | 'flame',
    title: string,
    description: string
  }[]
}

export function FeaturesTitle(props: FeaturesTitleProps) {
  const {cta, features, title, description} = props;
  const iconMap = {
    receipt: IconReceiptOff,
    file: IconFileCode,
    cicle: IconCircleDotted,
    flame: IconFlame
  };

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            {title}
          </Title>

          {description && (
            <Text c="dimmed">{description}</Text>
          )}
          
          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
            herf={cta.link}
          >
            {cta.label}
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {features.map((feature, index) => {
              const Icon = feature.icon ? iconMap[feature.icon] : null;

              return(
                <div key={index}>
                  {Icon && (
                    <ThemeIcon
                      size={44}
                      radius="md"
                      variant="gradient"
                      gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                    > 
                      <Icon size={26} stroke={1.5} />                  
                    </ThemeIcon>
                  )}
                  
                  <Text fz="lg" mt="sm" fw={500}>
                    {feature.title}
                  </Text>
                  <Text c="dimmed" fz="sm">
                    {feature.description}
                  </Text>
                </div>
              )
            })}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}