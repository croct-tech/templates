"use client";

import { Button, CloseButton, Group, Paper, Text } from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type CookiesBannerProps = {
  title: string,
  message: string,
  primaryCta: string,
  secondaryCta: string
}

export function CookiesBanner(props: CookiesBannerProps) {
  const {message, primaryCta, secondaryCta, title} = props;

  return (
    <Paper 
      withBorder 
      p="lg" 
      radius="md" 
      shadow="md" 
      className={classes.paper}
    >
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          {title}
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text c="dimmed" fz="xs">
        {renderMarkdown(message, {
          link: classes.link
        })}
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          {primaryCta}
        </Button>
        <Button variant="outline" size="xs">
          {secondaryCta}
        </Button>
      </Group>
    </Paper>
  );
}
