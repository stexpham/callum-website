import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cx } from "cva";
import type { AspectRatio } from "@repo/ui/media-aspect";
import { MediaWrapper } from "@repo/ui/media-wrapper";
import { type Post } from "contentlayer/generated";
import { LinkOrDiv } from "../utils";
import { CardImage } from "./card-image";
import { CardTitleMeta } from "./card-title-meta";

interface SnapCardProps {
  post: Post;
  className?: string;
  captionClassName?: string;
  children?: React.ReactNode;
}

export const SnapCard = ({
  post,
  className,
  captionClassName,
  children,
}: SnapCardProps) => {
  const isViewAllWork = post.slug === "view-all-work";

  return (
    <LinkOrDiv
      className={cx(
        "group relative h-full w-full overflow-hidden rounded-[9px]",
        "bg-canvas dark:bg-background-subtle",
        "block border",
        className
      )}
      href={(() => {
        if (isViewAllWork) return "/work";
        if (post.category === "writing") return `/${post.slug}`;
        return undefined;
      })()}
    >
      <MediaWrapper
        aspect={"video" as AspectRatio}
        showBorder={false}
        showRounded={false}
      >
        {post.assets && post.assets.length > 0 ? (
          <CardImage
            asset={post.assets[0]}
            priority
            sizes="(min-width: 620px) 100vw, 380px"
          />
        ) : null}
      </MediaWrapper>

      <hr />
      <div className={cx("space-y-[2px] px-4 py-2.5 pb-w6", captionClassName)}>
        <h2 className="flex items-center gap-1 text-left text-base font-medium">
          {post.title}
          {isViewAllWork ? <ArrowRightIcon className="size-em" /> : null}
        </h2>
        <CardTitleMeta post={post} />
      </div>

      {/* SLOT FOR CUSTOMISATION, NAUGHTY! */}
      {children}
    </LinkOrDiv>
  );
};
