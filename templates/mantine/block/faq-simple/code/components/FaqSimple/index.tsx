"use client";

import { Accordion, Container, Title } from '@mantine/core';
import classes from '?/./index.module.css';
import {renderMarkdown} from "?/**/markdown.{js,jsx,ts,tsx}";

export type FaqSimpleProps = {
  title: string,
  questions: {
    question: string,
    answer: string
  }[]
}

export function FaqSimple(props: FaqSimpleProps) {
  const {questions, title} = props;

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        {title}
      </Title>

      <Accordion variant="separated">
        {questions.map((question, index) => (
          <Accordion.Item className={classes.item} value={`question-${index}`} key={index}>
            <Accordion.Control>{question.question}</Accordion.Control>
            <Accordion.Panel>
              {renderMarkdown(question.answer, {
                link: classes.link,
              })}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
