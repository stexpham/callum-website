import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { format, parseISO } from "date-fns";
import { cx } from "~/cva.config";
import { type Post } from "contentlayer/generated";
import { PostCategoryIcon } from "./post-category-icon";

const ICON_STYLE = "h-[0.666em] w-[0.666em] transform translate-y-[-0.235em]";

interface PostLinkContentProps {
  post: Post;
  isLibrary?: boolean;
  isComingSoon?: boolean;
  isFeatured?: boolean;
}

export const PostLinkContent = ({
  post,
  isLibrary,
  isComingSoon,
  isFeatured,
}: PostLinkContentProps) => {
  const hoverLabel = () => {
    if (isLibrary) return "View";
    if (isComingSoon) return "Coming soon";
    if (post.thumbnailLink) return "Open";
    if (post.category === "projects") return "View";
    return "Read";
  };

  return (
    <div className="group flex items-end justify-between gap-2 py-1.5">
      {/* TITLE */}
      <div
        className={cx(
          "relative flex items-center gap-0.5 group-hover:text-accent",
          "ease transition-colors duration-300"
        )}
      >
        {isFeatured ? (
          <div className="absolute left-[-0.7em] flex items-center justify-center pr-[calc(6/17*1em)] pt-[0.2em] sm:left-[-1em]">
            {/* animate-pulse2 h-[0.35em] w-[0.35em] */}
            <div className="h-[0.3em] w-[0.3em] rounded-full bg-design group-hover:bg-accent" />
          </div>
        ) : null}
        <h2 className="font-sans">{post.linkTitle || post.title}</h2>
        {post.thumbnailLink && !isComingSoon ? (
          <ArrowTopRightIcon className={cx(ICON_STYLE)} />
        ) : null}
      </div>

      {/* DOTDOTDOT */}
      <PostDots />

      {/* END */}
      <div
        className={cx(
          "Text-subheading relative text-solid group-hover:text-accent",
          "flex items-center gap-3.5",
          "ease transition-colors duration-300",
          // shift everything down a bit
          // "translate-y-[0.35em] transform",
          // cover the last dot
          "pl-2"
        )}
      >
        {/* END HOVER LABEL */}
        <div
          className={cx(
            "absolute opacity-0 group-hover:opacity-100",
            isComingSoon ? "-left-[11.2em]" : "-left-[4.2em]"
          )}
        >
          <span className="z-10 bg-canvas px-1">{hoverLabel()}</span>
        </div>

        {/* END META */}
        <PostCategoryIcon category={post.category} />
        <hr
          className={cx(
            "hr-vertical h-[12px] translate-y-[-0.1em]",
            "group-hover:border-accent",
            "ease transition-colors duration-300"
          )}
        />
        <div className="md:min-w-[33px]">
          {post.date ? format(parseISO(post.date), "yyyy") : "HEY"}
        </div>
      </div>
    </div>
  );
};

export const PostDots = () => (
  <div
    className={cx(
      "dotdotdot h-[1px] flex-1 translate-y-[-0.2em] opacity-40",
      "group-hover:text-accent group-hover:opacity-100",
      "ease transition-colors duration-300"
    )}
  />
);
