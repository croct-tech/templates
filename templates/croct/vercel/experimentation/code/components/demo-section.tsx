'use client'

import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import { renderMarkdown } from "?/**/*/markdown.{js,jsx,ts,tsx}"

type DemoSectionProps = {
  preTitle?: string
  heading: string
  description?: string
  topics?: {
    title: string,
    description: string,
  }[],
  primaryCtaLabel: string,
  secondaryCtaLabel: string,
  note?: string
  additionalInfo?: string
  image: string
}

export function DemoSection(props: DemoSectionProps) {
  const {preTitle, heading, description, topics, primaryCtaLabel, secondaryCtaLabel, note, additionalInfo, image} = props

  return (
    <div className="bg-white">
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {preTitle && (
                  <h2 className="text-base/7 font-semibold text-indigo-600">{preTitle}</h2>
                )}
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {heading}
                </p>
                {description && (
                  <p className="mt-6 text-lg/8 text-gray-700">{description}</p>
                )}
                {topics && (
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {topics.map((feature) => (
                      <div key={feature.title} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <ArrowRightCircleIcon aria-hidden="true"
                                                className="absolute left-1 top-1 size-5 text-indigo-600"/>
                          {feature.title}
                        </dt>
                        {' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <p className="mt-6 text-lg/8 text-gray-700">
                  {note}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {primaryCtaLabel}
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                  >
                    {secondaryCtaLabel}
                  </button>
                </div>
                {additionalInfo && (
                  <p className="mt-6 text-lg/8 text-gray-700">{renderMarkdown(additionalInfo)}</p>
                )}
              </div>
            </div>

            <img
              alt="Image"
              src={image}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
