"use client";

import { Button, Image, Text, TextInput, Title } from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type EmailBannerProps = {
  title: string,
  subtitle?: string,
  description: string,
  image: string,
  form: {
    placeholder: string,
    cta: string
  }
}

export function EmailBanner(props: EmailBannerProps) {
  const {description, form, image, title, subtitle} = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>{title}</Title>
        {subtitle && (
          <Text fw={500} fz="lg" mb={5}>
            {subtitle}
          </Text>
        )}
        
        <Text fz="sm" c="dimmed">
          {renderMarkdown(description, {
            link: classes.link,
          })}
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder={form.placeholder}
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            radius="md"
            size="md"
          />
          <Button className={classes.control} radius="md" size="md">
            {form.cta}
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
}
