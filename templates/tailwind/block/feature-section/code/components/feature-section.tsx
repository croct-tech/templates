'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export type FeatureSectionProps = {
  image: string,   
  preTitle?: string,
  title: string,
  description?: string,
  features: Array<{
    icon: "ServerIcon" | "LockClosedIcon" | "CloudArrowUpIcon";
    title: string,
    description: string
  }>,
}

export function FeatureSection(props: FeatureSectionProps) {
  const {image, preTitle, title, description, features} = props

  const iconMap = {
    ServerIcon: ServerIcon,
    LockClosedIcon: LockClosedIcon,
    CloudArrowUpIcon: CloudArrowUpIcon,
  }

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {preTitle && (
                <h2 className="text-base/7 font-semibold text-indigo-600">{preTitle}</h2>
              )}
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {title}
              </p>
              {description && (
                <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
              )}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={feature.title} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <Icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.title}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={image}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
