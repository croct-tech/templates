import type { GetServerSideProps } from "next"
import type { SlotContent } from "@croct/plug-next"
import styles from "?/./page.module.css"
import { Header } from "?/**/*/header.{jsx,tsx}"
import { ProductGrid } from "?/**/*/product-grid.{jsx,tsx}"
import { Carousel } from "?/**/*/carousel.{jsx,tsx}"
import { fetchContent } from "@croct/plug-next/server"
import { LinkButton } from "@croct/template-ui/react"

export type PageProps = {
  content: SlotContent<'%slotId%@%slotVersion%'>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: await fetchContent('%slotId%@%slotVersion%', {route: context})
});

export default function Page({content}: PageProps) {
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
        label="Edit slider"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.shadcn_ui&utm_content=pricing_page&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
      />
    </>
  );
}
