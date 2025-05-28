import type {ReactNode} from "react"
import { render } from "@croct/md-lite"
import Image from "next/image"
import Typography, { TypographyProps } from "@mui/material/Typography"
import Link, { LinkProps } from "@mui/material/Link"

export type MarkdownStyles = {
  bold?: TypographyProps;
  italic?: TypographyProps;
  strike?: TypographyProps;
  code?: TypographyProps;
  link?: LinkProps;
  paragraph?: TypographyProps;
}

export function renderMarkdown(content: string, styles: MarkdownStyles = {}): ReactNode {
  return render<ReactNode>(content, {
    fragment: node => node.children,
    text: node => node.content,
    bold: node => <Typography component="b" {...styles.bold} key={node.index}>{node.children}</Typography>,
    italic: node => <Typography component="i" {...styles.italic} key={node.index}>{node.children}</Typography>,
    strike: node => <Typography component="s" {...styles.strike} key={node.index}>{node.children}</Typography>,
    code: node => <Typography component="code" {...styles.code} key={node.index}>{node.source}</Typography>,
    link: node => (<Link {...styles.link} key={node.index} href={node.href}>{node.children}</Link>),
    image: node => <Image key={node.index} src={node.src} alt={node.alt}/>,
    paragraph: node => <Typography component="p" {...styles.paragraph} key={node.index}>{node.children}</Typography>,
  });
}
