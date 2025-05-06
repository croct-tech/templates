"use client"

import {type CSSProperties, useState} from "react"
import styles from "?/./carousel.module.css"
import {Swiper, SwiperSlide} from "swiper/react"
import {A11y, Navigation} from "swiper/modules"
import type {Swiper as SwiperInstance} from "swiper/types"
import "swiper/css"

type Offer = {
  price?: number
  originalPrice?: number
  coupon?: string
}

type SlideMap = {
  "hero": HeroSlideProps
  "side-image": SideImageSlideProps
  "full-image": FullImageSlideProps
}

export type Slide<L extends keyof SlideMap = keyof SlideMap> = {
  [K in L]: SlideMap[K] & {
  _type: K
}
}[L];

interface ImageCarouselProps {
  slides: Slide[]
}

export function Carousel({ slides }: ImageCarouselProps) {
  const [swiper, setSwiper] = useState<SwiperInstance>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    swiper?.slideNext();
  }

  const prevSlide = () => {
    swiper?.slidePrev();
  }

  const goToSlide = (index: number) => {
    swiper?.slideTo(index)
  }

  const renderSlideContent = (slide: Slide, key: number) => {
    switch (slide._type) {
      case "hero":
        return <HeroSlide key={key} {...slide} />

      case "side-image":
        return <SideImageSlide key={key} {...slide} />

      case "full-image":
        return <FullImageSlide key={key} {...slide} />
    }
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <Swiper
          loop
          modules={[Navigation, A11y]}
          onSwiper={setSwiper}
          onRealIndexChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {renderSlideContent(slide, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className={`${styles.carouselControl} ${styles.prevControl}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowIcon}
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className={`${styles.carouselControl} ${styles.nextControl}`} onClick={nextSlide} aria-label="Next slide">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowIcon}
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

type HeroSlideProps = {
  title: string
  subtitle: string
  media?: {
    videoUrl?: string
    imageUrl?: string
  }
  cta: {
    label: string
    url: string
  }
  offer?: Offer,
  style: {
    centered?: boolean
    backgroundColor: string
    textColor: string
    backgroundMediaOpacity?: number
    backgroundMediaBlur?: number
    discountBadgeColor?: string
  }
}

function HeroSlide({ title, subtitle, media, cta, offer, style }: HeroSlideProps) {
  return (
    <div
      className={`${styles.slide} ${style.centered ? styles.heroCenteredSlide : styles.heroSlide}`}
      style={{
        "--text-color": style.textColor,
        "--background-color": style.backgroundColor,
        "--background-image": media?.imageUrl ? `url(${media?.imageUrl})` : undefined,
        "--background-media-opacity": style.backgroundMediaOpacity,
        "--background-media-blur": style.backgroundMediaBlur,
        "--discount-badge-color": style.discountBadgeColor,
      } as CSSProperties}
    >
      {media?.videoUrl && (
        <video className={styles.backgroundVideo} poster={media.imageUrl} autoPlay loop muted playsInline>
          <source src={media.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!media?.videoUrl && media?.imageUrl && (
        <div className={styles.backgroundImage} />
      )}
      <div className={style.centered ? styles.heroCenteredContent : styles.heroContent}>
        <h2 className={style.centered ? styles.heroCenteredTitle : styles.heroTitle}>{title}</h2>
        {style.centered && (<div className={styles.heroCenteredDivider}></div>)}
        <p className={style.centered ? styles.heroCenteredSubtitle: styles.heroSubtitle}>{subtitle}</p>
        {offer && (
          <PriceInfo
            price={offer.price}
            originalPrice={offer.originalPrice}
            couponCode={offer.coupon}
            className={style.centered ? styles.heroCenteredPrice : styles.heroPrice}
          />
        )}
        <a href={cta.url} className={style.centered ? styles.heroCenteredCta : styles.heroCta}>
          {cta.label}
        </a>
      </div>
    </div>
  )
}

type SideImageSlideProps = {
  title: string
  subtitle: string
  image: string
  cta: {
    label: string
    url: string
  }
  offer?: Offer,
  style: {
    backgroundColor: string
    textColor?: string
    discountBadgeColor?: string
  }
};

function SideImageSlide({ title, subtitle, image, cta, offer, style }: SideImageSlideProps) {
  return (
    <div
      className={`${styles.slide} ${styles.sideImageSlide}`}
      style={{
        "--text-color": style.textColor,
        "--background-color": style.backgroundColor,
        "--discount-badge-color": style.discountBadgeColor,
      } as CSSProperties}
    >
      <div className={styles.sideImageContent}>
        <h2 className={styles.sideImageTitle}>{title}</h2>
        <p className={styles.sideImageSubtitle}>{subtitle}</p>
        {offer && (
          <PriceInfo
            price={offer.price}
            originalPrice={offer.originalPrice}
            couponCode={offer.coupon}
            className={styles.sideImagePrice}
          />
        )}
        <a href={cta.url} className={styles.sideImageCta}>{cta.label}</a>
      </div>
      <div className={styles.sideImageImage} style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
}

type FullImageSlideProps = {
  image: string
  url: string
  alt: string
}

function FullImageSlide({ image, alt, url }: FullImageSlideProps) {
  return (
    <a
      title={alt}
      className={`${styles.slide} ${styles.fullImageSlide}`}
      style={{backgroundImage: `url(${image})`}}
      href={url}
    />
  );
}

type PriceInfoProps = {
  price?: number
  originalPrice?: number
  couponCode?: string
  className?: string
}

function PriceInfo({ price, originalPrice, couponCode, className }: PriceInfoProps) {
  if (!price && !originalPrice && !couponCode) {
    return null
  }

  return (
    <div className={`${styles.priceContainer} ${className}`}>
      {(price || originalPrice) && (
        <div className={styles.priceWrapper}>
          {originalPrice && <span className={styles.originalPrice}>${originalPrice}</span>}
          {price && <span className={styles.price}>${price}</span>}
          {originalPrice && price && (
            <span className={styles.discountBadge}>
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </span>
          )}
        </div>
      )}

      {couponCode && (
        <div className={styles.couponContainer}>
          <span className={styles.couponLabel}>Use code:</span>
          <span className={styles.couponCode}>{couponCode}</span>
        </div>
      )}
    </div>
  );
}
