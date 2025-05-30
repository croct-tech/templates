import { Suspense } from "react"
import Link from "next/link"
import { AllPosts } from "?/app/components/Posts.{js,jsx,ts,tsx}"
import GetStartedCode from "?/app/components/GetStartedCode.{js,jsx,ts,tsx}"
import { heroQuery } from "?/sanity/lib/queries.{js,jsx,ts,tsx}"
import { client } from "?/sanity/lib/client.{js,jsx,ts,tsx}"
import { fetchContent } from "@croct/plug-next/server"
import type { HeroSection } from "?/sanity.types.ts"
import { LinkButton } from "@croct/template-ui/react"

export default async function Page() {
  const result = await client.fetch<HeroSection>(heroQuery, {slug: "home-hero"}, {
    cache: "force-cache"
  });

  const {content} = await fetchContent('%slotId%@%slotVersion%', {
    fallback: result ?? undefined
  });

  return (
    <>
      <div className="bg-gradient-to-r from-red-200 from-0% via-white via-40%  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center">
            <div className="flex flex-col gap-4 items-center">
              <div className=" text-md leading-6 prose uppercase">
                A starter template for
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-black">
                {content.heading}
              </h1>
            </div>
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>{content.tagline}</p>
            </div>
            <div className="flex items-center flex-col gap-4">
              <GetStartedCode command={content.command} />
              <Link
                href="https://docs.croct.com/reference/sdk/nextjs/installation?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.cms_integration&utm_content=sanity"
                className="inline-flex text-red-500 text-xs md:text-sm underline hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Croct Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-1 inline"
                  fill="currentColor"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
      <LinkButton
        branded
        size="lg"
        label="Edit content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.ui_block&utm_content=carousel_section&utm_term=nextjs"
        target="_blank"
        position="bottom-right"
        theme="light"
      />
    </>
  );
}
