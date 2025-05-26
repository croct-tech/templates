"use client";

import { CodeComparison } from "?/**/*/magicui/code-comparison.tsx"

interface CodeDiffPaneProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
  highlightColor: string;
}

export function CodeDiffPane(props: CodeDiffPaneProps) {
  return (
    <CodeComparison {...props} />
  );
}
