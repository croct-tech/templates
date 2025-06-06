import type { GetServerSideProps } from "next"
import styles from "?/./page.module.css"
import { TemplateCanvas } from "@croct/template-ui/react"
import { PhoneInput } from "?/**/*/phone-input.{jsx,tsx}"
import { evaluate } from "@croct/plug-next/server"

type Location = {
  regionCode: string|null,
  cityName: string|null,
  countryName: string|null,
  countryCode: string|null,
}

export type PageProps = {
  location: Location
}

export const getServerSideProps: GetServerSideProps<PageProps> = async context => ({
  props: {
    location: await evaluate<Location>('location', {
      route: context,
    })
  }
});

export default function Page({location}: PageProps) {
  return (
    <TemplateCanvas
      title="React phone number input"
      ctaLabel="Go to admin"
      ctaLink="%workspaceUrl%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.npm&utm_content=react_phone_number_input&utm_term=nextjs"
      ctaTarget="_blank"
      fullScreen
      isolated
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Localized phone field</h1>
          <p className={styles.description}>
            Country code automatically detected from your location.
          </p>
          <div className={styles.demoContainer}>
            <div className={styles.wrapper}>
              <div className={styles.locationInfo}>
                <div className={styles.locationIcon}>
                  {location.cityName === null ? "🌊" : "📍"}
                </div>
                <div className={styles.locationDetails}>
                  <span className={styles.locationPrimary}>
                    {location.cityName ?? "Atlantis" }{location.regionCode && `, ${location.regionCode}`}
                  </span>
                  <span className={styles.locationSecondary}>{location.countryName ?? "Island of Atlas"}</span>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="phone" className={styles.phoneLabel}>
                  Phone number
                </label>
                <PhoneInput defaultCountry={location.countryCode} placeholder="Enter phone number" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </TemplateCanvas>
  );
}
