"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "?/**/*/magicui/terminal.tsx";

interface LogProps {
  message: string;
  delay?: number;
  animation: 'typing' | 'reveal';
  semantics: 'log' | 'success' | 'info' | 'error';
}

export interface CliDemoProps {
  output: LogProps[];
}

const semanticsColors = {
  log: 'text-muted-foreground',
  success: 'text-green-500',
  info: 'text-blue-500',
  error: 'text-red-500',
}

export async function CliDemo(props: CliDemoProps) {
  return (
    <Terminal>
      {props.output.map((log, index) => {
        switch (log.animation) {
          case 'typing':
            return (
              <TypingAnimation
                key={index}
                delay={log.delay}
                className={semanticsColors[log.semantics]}
              >
                {log.message}
              </TypingAnimation>
            );

          case 'reveal':
            return (
              <AnimatedSpan
                key={index}
                delay={log.delay}
                className={semanticsColors[log.semantics]}
              >
                <span>{log.message}</span>
              </AnimatedSpan>
            );
        }
      })}
    </Terminal>
  );
}
