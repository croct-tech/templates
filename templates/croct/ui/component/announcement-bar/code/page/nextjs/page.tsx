import styles from "?/./page.module.css";
import { AnnouncementBar } from "?/**/*/announcement-bar.{js,tsx}";
import { TemplateCanvas } from "@croct/template-ui/next"
import { fetchContent } from "@croct/plug-next/server"

export default async function Page() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
      <TemplateCanvas
          theme="light"
          title="Announcement bar"
          ctaLabel="Edit this content"
          ctaLink="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_component&utm_content=announcement_bar&utm_term=nextjs"
          ctaTarget="_blank"
          src="#"
          fullScreen
          portal
      >
          <AnnouncementBar {...content} />
          <PageContent />
      </TemplateCanvas>
  );
}

function PageContent() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <nav className={styles.nav}>
          <div className={styles.navItem}></div>
          <div className={styles.navItem}></div>
          <div className={styles.navItem}></div>
          <div className={styles.navItem}></div>
        </nav>
        <div className={styles.actions}>
          <div className={styles.actionButton}></div>
          <div className={styles.actionButton}></div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}></div>
          <div className={styles.heroSubtitle}></div>
          <div className={styles.heroButtons}>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
          </div>
        </div>
        <div className={styles.heroImage}></div>
      </section>
    </div>
  )
}
