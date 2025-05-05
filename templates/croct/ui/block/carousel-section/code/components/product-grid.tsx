import styles from "?/./product-grid.module.css"

export function ProductGrid() {
  const skeletonItems = Array.from({length: 4}, (_, index) => index)

  return (
    <div className={styles.productGrid}>
      {skeletonItems.map((item) => (
        <div key={item} className={styles.productSkeleton}>
          <div className={styles.imageSkeleton}></div>
          <div className={styles.contentSkeleton}>
            <div className={styles.titleSkeleton}></div>
            <div className={styles.categorySkeleton}></div>
            <div className={styles.priceSkeleton}></div>
            <div className={styles.buttonSkeleton}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
