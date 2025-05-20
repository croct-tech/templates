'use client'

export type HeroSectionProps = {
  heading: string
  tagline: string
  preTitle?: {
    message: string
    cta?: {
      label: string
      link: string
    }
  },
  primaryCta: {
    label: string
    link: string
  },
  secondaryCta?: {
    label: string
    link: string
  }
}

export function HeroSection(props: HeroSectionProps) {
  const {heading, tagline, preTitle, primaryCta, secondaryCta} = props
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        {preTitle && (
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {preTitle.message}
              {preTitle.cta && ' '}
              {preTitle.cta && (
                <a href={preTitle.cta.link} className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0"/>
                  {preTitle.cta.label} <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        )}
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            {heading}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {tagline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryCta.link}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a href={secondaryCta.link} className="text-sm/6 font-semibold text-gray-900">
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  )
}
