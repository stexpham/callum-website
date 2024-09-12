import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { format, parseISO } from "date-fns";
import { Link } from "@repo/ui/next-link";
import { cx } from "cva";
import { type Post } from "contentlayer/generated";
import { iconStyle, transformStyle } from "./card-styles";
import { CardIcon } from "./card-title-meta";

interface HeroCardWrapperProps {
  post: Post;
  children: React.ReactNode;
  className: string;
  captionClassName: string;
  showRule?: boolean;
}

export const HeroCardWrapper = ({
  post,
  children,
  className,
  captionClassName,
  showRule,
}: HeroCardWrapperProps) => (
  <Link
    className={cx("group block h-full w-full", className)}
    href={post.thumbnailLink ? post.thumbnailLink : `/${post.slug}`}
  >
    <div className="relative">
      {children}

      <div
        className={cx(
          "flex w-full flex-1 transform items-baseline gap-2 text-base",
          captionClassName
        )}
      >
        <CardIcon post={post} />
        <span>{post.title}</span>
        {showRule ? (
          <hr
            className={cx(
              "hr-vertical mx-[2px] block h-[15px] border-solid",
              transformStyle
            )}
          />
        ) : null}
        <span className="text-solid">
          {format(parseISO(post.date), "yyyy")}
        </span>
        {post.thumbnailLink ? (
          <ArrowTopRightIcon className={cx(iconStyle, transformStyle)} />
        ) : null}
      </div>
    </div>
  </Link>
);
