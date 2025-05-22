'use client'

export type LogoCloudProps = {
    logos: Array<string>,
    title: string,
}

export function LogoCloud(props: LogoCloudProps) {
  const {logos, title} = props

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((item, index) => (
            <img
              alt="Transistor"
              src={item}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
