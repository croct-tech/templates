import { useStore } from '@nanostores/react';
import { heroBanner } from '../stores/banner';

export function HeroBanner() {
    const { content } = useStore(heroBanner);

    return (
        <section className="hero-banner">
            <div className="hero-content">
                <h1>{content.title}</h1>
                {content.subtitle && <p className="hero-subtitle">{content.subtitle}</p>}
                <a href={content.ctaLink} className="hero-cta">
                    {content.ctaLabel}
                </a>
            </div>
        </section>
    );
}
