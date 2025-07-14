import styles from "?/./page.module.css"
import { Header } from "?/**/*/header.{jsx,tsx}"
import { ProductGrid } from "?/**/*/product-grid.{jsx,tsx}"
import { Carousel } from "?/**/*/carousel.{jsx,tsx}"
import { LinkButton } from "@croct/template-ui/react"
import { useContent } from "@croct/plug-react"

export default function Page() {
  const content = useContent('%slotId%@%slotVersion%');

  return (
    <>
      <main className={styles.main}>
        <Header/>
        <section className={styles.heroSection}>
          <div className={styles.carouselWrapper}>
            <Carousel slides={content.slides.map(slide => ({layout: slide._type, ...slide}))} />
          </div>
        </section>
        <section className={styles.productsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>New Releases</h2>
            <p className={styles.sectionSubtitle}>Latest trends and styles</p>
          </div>
          <ProductGrid/>
        </section>
      </main>
      <LinkButton
        branded
        label="Edit this content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_block&utm_content=carousel_section&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
