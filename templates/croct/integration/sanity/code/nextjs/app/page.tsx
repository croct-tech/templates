import { Suspense } from "react";
import Link from "next/link";
import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import SideBySideIcons from "@/app/components/SideBySideIcons";
import { heroQuery } from "?/sanity/lib/queries.{js,jsx,ts,tsx}"
import { client } from "?/sanity/lib/client.{js,jsx,ts,tsx}"
import {fetchContent} from "@croct/plug-next/server"
import type {HeroSection} from "?/sanity.types.ts"
import { LinkButton } from "@croct/template-ui/react"
import { renderMarkdown } from "?/**/markdown.{js,jsx,ts,tsx}";

export default async function Page() {
  const result = await client.fetch<HeroSection>(heroQuery, {slug: "%slotId%"}, {
    cache: "force-cache"
  });

  const {content} = await fetchContent('%slotId%@1', {
    fallback: result ?? undefined
  });

  return (
    <>
      <div className="relative">
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
          <div className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          <div className="container">
            <div
              className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                  {content.preHeading}
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                  {renderMarkdown(content.heading, {}, {
                    link: node => {
                      const [url, color] = parseLink(node.href);

                      return (
                        <span key={node.index} style={{color: color, textDecorationColor: color}}>
                             <Link
                               target="_blank"
                               href={url}
                               className="underline hover:text-inherit decoration-inherit text-black underline-offset-8 hover:underline-offset-4 transition-all ease-out"
                             >
                                {node.children}
                            </Link>
                         </span>
                      );
                    }
                  })}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <SideBySideIcons logos={content.logos}/>
          <div
            className="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center">
            <div
              className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center">
              {content.tagline}
              <div className="flex items-center flex-col gap-4">
                <GetStartedCode command={content.command}/>
                <Link
                  href="https://docs.croct.com/reference/sdk/nextjs/integration?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.cms_integration&utm_content=sanity"
                  className="inline-flex text-brand text-xs md:text-sm underline hover:text-gray-900"
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
                    <path
                      d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
      <LinkButton
        branded
        size="lg"
        label="Edit this content"
        href="%workspaceUrl%/slots/edit/%slotId%/%slotVersion%?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.cms_integration&utm_content=sanity"
        target="_blank"
        position="bottom-right"
        theme="light"
      />
    </>
  );
}

function parseLink(href: string): [string, string] {
  if (URL.canParse(href)) {
    const url = new URL(href);
    const color = url.searchParams.get('color');

    if (color !== null) {
      url.searchParams.delete('color');

      return [url.href, color];
    }
  }

  return [href, '#000'];
}
