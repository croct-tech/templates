import {Marquee} from "@/components/ui/marquee";
import {fetchContent} from "@croct/plug-next/server";

export default async function Home() {
    const {content: {reviews, ...props}} = await fetchContent('%slotId%@1');

    return (
        <>
            <EditToolbar />
            <div className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee {...props}>
                    {reviews.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee {...props} reverse={!props.reverse}>
                    {reviews.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    );
}

const ReviewCard = ({
  avatar,
  name,
  username,
  content,
}: {
  avatar: string;
  name: string;
  username: string;
  content: string;
}) => {
  return (
    <figure
      className={[
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      ].join(' ')}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={avatar} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{content}</blockquote>
    </figure>
  );
};

function EditToolbar() {
    return (
        <div className="flex justify-center items-center gap-4 bg-indigo-600 px-6 py-2.5 sm:px-3.5">
            <p className="text-sm/6 text-white">
                ✨ You can edit, test variations, and personalize this content
            </p>
            <a
                href="%workspaceUrl%slots/edit/%slotId%/latest"
                target="_blank"
                className="rounded-full ring-1 ring-inset ring-indigo-300  px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
                Go to admin <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
    )
}
