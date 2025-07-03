"use client";

import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '?/./index.module.css';

export type HeaderSimpleProps = {
  items: {
    link: string,
    label: string
  }[]
}

export function HeaderSimple(props: HeaderSimpleProps) {
  const {items} = props;
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(items[0].link);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={classes.link}
              data-active={active === item.link || undefined}
              onClick={(event) => {
                event.preventDefault();
                setActive(item.link);
              }}
            >
              {item.label}
            </a>
          ))}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}