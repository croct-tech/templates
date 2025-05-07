import styles from "?/./content.module.css";

export function PageContent() {
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
