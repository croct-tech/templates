"use client";

import { Text } from '@mantine/core';
import classes from '?/./index.module.css';

export type StatsGroupProps = {
  statistic: {
    stats: string,
    title: string,
    description: string
  }[]
}

export function StatsGroup(props: StatsGroupProps) {
  const {statistic} = props;

  return (
    <div className={classes.root}>
      {statistic.map((stat) => (
        <div key={stat.title} className={classes.stat}>
          <Text className={classes.count}>{stat.stats}</Text>
          <Text className={classes.title}>{stat.title}</Text>
          <Text className={classes.description}>{stat.description}</Text>
        </div>
      ))}
    </div>
  );
}