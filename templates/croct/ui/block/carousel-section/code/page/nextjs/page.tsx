import styles from '?/./page.module.css';
import { Header } from '?/**/*/header.tsx';
import { ProductGrid } from '?/**/*/product-grid.tsx'
import { Carousel } from '?/**/*/carousel.tsx';
import { fetchContent } from '@croct/plug-next/server'

export default async function Home() {
  const {content} = await fetchContent('%slotId%@%slotVersion%');

  return (
    <main className={styles.main}>
      <Header/>
      <section className={styles.heroSection}>
        <div className={styles.carouselWrapper}>
          <Carousel slides={content}/>
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
  );
}
