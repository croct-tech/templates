"use client";

import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from '?/./index.module.css';

export type FeaturesCardsProps = {
  preTitle?: string,
  title: string,
  description?: string,
  features: {
    icon?: 'gauge' | 'user' | 'cookie',
    title: string,
    description: string,
  }[]
}

export function FeaturesCards(props: FeaturesCardsProps) {
  const theme = useMantineTheme();
  const {features, title, description, preTitle} = props;
  const iconMap = {
    gauge: IconGauge,
    user: IconUser,
    cookie: IconCookie
  };

  return (
    <Container size="lg" py="xl">
      {preTitle && (
        <Group justify="center">
        <Badge variant="filled" size="lg">
          {preTitle}
        </Badge>
      </Group>
      )}
      
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {title}
      </Title>

      {description && (
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          {description}
        </Text>
      )}

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features.map((feature, index) => {
          const Icon = feature.icon ? iconMap[feature.icon] : null;

          return (
            <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
              <Icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
              <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
              </Text>
              <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
              </Text>
            </Card>
          )
        })}
      </SimpleGrid>
    </Container>
  );
}