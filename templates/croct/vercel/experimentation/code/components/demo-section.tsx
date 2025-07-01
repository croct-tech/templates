'use client'

import { useState } from "react"
import { ArrowRightCircle, ArrowRight, Check } from "lucide-react"
import { useCroct } from "@croct/plug-react"
import logo from "?/./croct.svg"

type DemoSectionProps = {
  preTitle?: string
  heading: string
  description?: string
  topics?: {
    title: string
    description: string
    tag?: string
  }[]
  buttons: {
    reset: string
    track: string
  }
  variant: {
    name: string
    color: string
  }
}

const reset = async () => {
  document.cookie = "ct.client_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();
};

export function DemoSection(props: DemoSectionProps) {
  const { preTitle, heading, description, topics, buttons, variant} = props
  const [tracked, setTracked] = useState(false)
  const croct = useCroct();
  const track = () => {
    croct.track('goalCompleted', {goalId: 'cta-click'});

    setTracked(true);

    setTimeout(() => {
      setTracked(false);
    }, 2000);
  };

  return (
      <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-between">
        <nav className="w-full max-w-6xl mx-auto p-8 lg:px-8 overflow-hidden">
          <a href="https://croct.com" className="flexfocus:outline-none">
            <img src={logo.src} title="Croct Logo" alt="Croct Logo" className="h-6 w-auto" />
          </a>
        </nav>

        <main className="relative isolate overflow-hidden sm:pb-16 flex-1 flex flex-col justify-center items-center">
          <div className="h-full w-full max-w-6xl p-8 lg:px-8">
            <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div>
                  {preTitle && (
                      <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">{preTitle}</h2>
                  )}
                  <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</p>
                  {description && (
                      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>
                  )}
                  {topics && (
                      <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                        {topics.map((feature, index) => (
                            <div key={feature.title} className="relative pl-9">
                              <dt className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                <ArrowRightCircle
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                    aria-hidden="true"
                                />
                                {feature.title}
                                {feature.tag && (
                                    <span className="inline-flex items-center rounded-md px-2 py-2 text-[10px]/2 medium uppercase font-medium ring-1 ring-inset bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/30">
                                      {feature.tag}
                                    </span>
                                )}
                              </dt>
                              <dd>{feature.description}</dd>
                            </div>
                        ))}
                      </dl>
                  )}

                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <button
                        type="button"
                        onClick={track}
                        style={{ backgroundColor: tracked ? "#22c55e" : variant.color }}
                        disabled={tracked}
                        className={
                            "rounded-md  px-5 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-300 ease-in-out flex items-center gap-2 active:scale-95"
                            + (tracked ? "" : " cursor-pointer hover:opacity-90")
                        }
                    >
                      {tracked ? (
                          <>
                            <Check className="h-5 w-5" />
                            <span>Tracked!</span>
                          </>
                      ) : (buttons.track)}
                    </button>
                    <button
                        type="button"
                        onClick={reset}
                        className="text-sm flex items-center cursor-pointer font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 group"
                    >
                      {buttons.reset} <span aria-hidden="true"><ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" /></span>
                    </button>
                  </div>

                  <p className="mt-8 text-sm leading-7 text-gray-500 dark:text-gray-400">
                    You can manage your experiment content and analyze results <a
                      href="https://app.croct.com/redirect/organizations/-organization-/workspaces/-workspace-/experiences?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.vercel_experiment"
                      className="font-normal text-indigo-600 underline dark:text-indigo-600 hover:no-underline" target="_blank">here</a>.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <VariantDisplay variant={variant.name} color={variant.color} className="w-full max-w-md sm:w-[32rem]" />
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

type VariantDisplayProps = {
  variant: string,
  color: string
  className?: string
}

function VariantDisplay({ variant, color, className }: VariantDisplayProps) {
  const baseClasses = "flex items-center justify-center w-full h-80 rounded-xl shadow-xl text-white "
      + "text-9xl font-bold transition-colors duration-300 ease-in-out"

  return (
      <div className={`${baseClasses} ${className ?? ""}`} style={{backgroundColor: color}}>
        <span>{variant}</span>
      </div>
  )
}
