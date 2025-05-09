import styles from "?/./page.module.css"
import { TemplateCanvas } from "@croct/template-ui/react"
import { PhoneInput } from "?/**/*/phone-input.{jsx,tsx}"
import { useEvaluation } from "@croct/plug-react"

type Location = {
  regionCode?: string
  city: string
  country: string
  countryCode?: string
}

export default function Page() {
  const location = useEvaluation<Location|null>('location', {
    initial: null,
    fallback: {
      city: 'Unknown',
      country: 'Unknown',
    }
  });

  return (
    <TemplateCanvas
      title="React phone number input"
      ctaLabel="Go to admin"
      ctaLink="%workspaceUrl%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.npm&utm_content=react_phone_number_input&utm_term=react"
      ctaTarget="_blank"
      src="#"
      fullScreen
      portal
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
                <div className={styles.locationIcon}>📍</div>
                <div className={styles.locationDetails}>
                  <span className={styles.locationPrimary}>
                    {location === null ?
                      'Loading...'
                      : <>{location.city}{location.regionCode && `, ${location.regionCode}`}</>
                    }
                  </span>
                  {location && (<span className={styles.locationSecondary}>{location.country}</span>)}
                </div>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="phone" className={styles.phoneLabel}>
                  Phone number
                </label>
                <PhoneInput defaultCountry={location?.countryCode} placeholder="Enter phone number" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </TemplateCanvas>
  );
}
