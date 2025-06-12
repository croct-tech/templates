"use client";

import {IconCheck} from '@tabler/icons-react';
import {Button, Container, Group, Image, List, Text, ThemeIcon, Title} from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type HeroBulletsProps = {
  heading: string,
  tagline: string,
  bullets?: {
    title: string,
    description: string,
  }[],
  primaryCta: {
    label: string,
    link: string,
  },
  secondaryCta?: {
    label: string,
    link: string,
  },
  image: string,
}

export function HeroBullets(props: HeroBulletsProps) {
  const {heading, tagline, bullets, primaryCta, secondaryCta, image} = props;

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            {renderMarkdown(heading, {
              bold: classes.highlight,
            })}
          </Title>
          <Text c="dimmed" mt="md">
            {tagline}
          </Text>
          {bullets && (<List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5}/>
              </ThemeIcon>
            }
          >
            {bullets.map((bullet, index) => (
              <List.Item key={index}>
                <b>{bullet.title}</b> – {bullet.description}
              </List.Item>
            ))}
          </List>)}
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => location.href = primaryCta.link}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => location.href = secondaryCta.link}
              >
                {secondaryCta.label}
              </Button>
            )}
          </Group>
        </div>
        <Image src={image} className={classes.image}/>
      </div>
    </Container>
  );
}
