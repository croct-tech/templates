import Image from "next/image";
import { TemplateCanvas } from "@croct/template-ui/next"
import { renderMarkdown } from "?/**/*/markdown.{tsx,js}"
import { fetchContent } from "@croct/plug-next/server"
import styles from "./page.module.css";

export default async function Home() {
  const {content} = await fetchContent("%slotId%@%slotVersion%");

  return (
    <TemplateCanvas
      title="Next.js 15 starter"
      ctaLabel="Edit this page"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.starter_next&utm_content=next_15&utm_term=css"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
    >
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            {content.instructions.map((step, index) => (
              <li key={index}>
                {renderMarkdown(step)}
              </li>
            ))}
          </ol>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href={content.primaryButton.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {content.primaryButton.label}
            </a>
            <a
              href={content.secondaryButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              {content.secondaryButton.label}
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=croct&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=croct&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=croct&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </TemplateCanvas>
  );
}
