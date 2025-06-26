"use client";

import { Button, Card, Overlay, Text } from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type ImageActionBannerProps = {
  image: string,
  title: string,
  description: string,
  cta: {
    label: string,
    link: string
  }
}

export function ImageActionBanner(props: ImageActionBannerProps) {
  const {cta, description, title, image} = props;

  return (
    <Card 
      radius="md" 
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {renderMarkdown(description, {
              bold: classes.description,
            })}
        </Text>

        <Button className={classes.action} variant="white" color="dark" size="xs" href={cta.link}>
          {cta.label}
        </Button>
      </div>
    </Card>
  );
}
