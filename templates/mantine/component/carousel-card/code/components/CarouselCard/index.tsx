"use client";

import { IconStarFilled } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Button, Card, Group, Image, Text } from '@mantine/core';
import classes from '?/./index.module.css';
import '@mantine/carousel/styles.css';

export type CarouselCardProps = {
  images: string[],
  title: string,
  description?: string,
  stars?: number,
  price: {
    displayPrice: number,
    frequency: string,
  }
  cta: {
    label: string,
    link: string
  }
}

export function CarouselCard(props: CarouselCardProps) {
  const {images, price, title, cta, description, stars} = props;

  return (
    <Card radius="md" withBorder padding="xl" className={classes.card}>
      <Card.Section>
        <Carousel
          withIndicators
          emblaOptions={{ loop: true }}
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Image src={image} height={220} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {title}
        </Text>

        {stars && (
          <Group gap={5}>
            <IconStarFilled size={16} color="var(--mantine-color-yellow-6)" />
            <Text fz="sm" fw={600}>
              {stars}
            </Text>
          </Group>
        )}
      </Group>

      {description && (
        <Text fz="sm" c="dimmed" mt="sm">
          {description}
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {`$${price.displayPrice}`}
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            {price.frequency}
          </Text>
        </div>

        <Button
          component="a" 
          radius="md" 
          href={cta.link}
        >
          {cta.label}
        </Button>
      </Group>
    </Card>
  );
}
