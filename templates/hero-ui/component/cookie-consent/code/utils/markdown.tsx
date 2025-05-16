import type { ReactNode } from "react"
import { render } from "@croct/md-lite"
import { Link } from "@heroui/react"

export type MarkdownClasses = {
    bold?: string;
    italic?: string;
    strike?: string;
    code?: string;
    link?: string;
    paragraph?: string;
}

export function renderMarkdown(content: string, classes: MarkdownClasses = {}): ReactNode {
    return render<ReactNode>(content, {
        fragment: node => node.children,
        text: node => node.content,
        bold: node => <b className={classes.bold} key={node.index}>{node.children}</b>,
        italic: node => <i className={classes.italic} key={node.index}>{node.children}</i>,
        strike: node => <s className={classes.strike} key={node.index}>{node.children}</s>,
        code: node => <code className={classes.code} key={node.index}>{node.content}</code>,
        link: node => <Link target="_blank" className={classes.link} key={node.index} href={node.href}>{node.children}</Link>,
        image: node => <img key={node.index} src={node.src} alt={node.alt} />,
        paragraph: node => <p className={classes.paragraph} key={node.index}>{node.children}</p>,
    });
}
