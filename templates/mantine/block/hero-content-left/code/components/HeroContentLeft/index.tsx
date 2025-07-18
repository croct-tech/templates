"use client";

import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type HeroContentLeftProps = {
  heading: string,
  tagline: string,
  cta: {
    label: string,
    link: string 
  },
  image: string
}

export function HeroContentLeft(props: HeroContentLeftProps) {
    const {cta, heading, image, tagline} = props;

  return (
    <div 
        className={classes.hero}
        style={{
            backgroundImage: `url(${image})`,
        }}
    >
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>{heading}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {renderMarkdown(tagline, {
              bold: classes.description,
            })}
        </Text>

        <Button 
          variant="gradient" 
          component="a"
          size="xl" 
          radius="xl" 
          className={classes.control} 
          href={cta.link}>
          {cta.label}
        </Button>
      </Container>
    </div>
  );
}