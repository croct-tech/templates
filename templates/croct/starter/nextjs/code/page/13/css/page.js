import Image from 'next/image'
import { TemplateCanvas } from '@croct/template-ui/react'
import { renderMarkdown } from '?/**/*/markdown.{js,tsx}'
import { fetchContent } from '@croct/plug-next/server'
import styles from './page.module.css'

export default async function Home() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <TemplateCanvas
      title="Next.js 13 starter"
      ctaLabel="Edit this page"
      ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.starter_next&utm_content=next_13&utm_term=css"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            {renderMarkdown(content.hint, {code: styles.code})}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=croct&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          {content.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {link.title} <span>-&gt;</span>
              </h2>
              <p>{link.description}</p>
            </a>
          ))}
        </div>
      </main>
    </TemplateCanvas>
  )
}
