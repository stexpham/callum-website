import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { cx } from "~/cva.config";
import { type Post } from "contentlayer/generated";
import { isVideoFile } from "@/utils";
import { CardImage } from "../card";
import type { AspectRatio } from "../media";
import { MediaWrapper } from "../media";

/* Much duplication between here & PostLinkContent!  */

const ICON_STYLE = "h-[0.666em] w-[0.666em] transform translate-y-[-0.235em]";

interface PostLinkBlockProps {
  post: Post;
  isComingSoon?: boolean;
}

export const PostLinkBlock = ({ post, isComingSoon }: PostLinkBlockProps) => {
  return (
    <div className="group flex flex-col gap-w4 sm:flex-row">
      <div className="w-full sm:w-1/3 sm:shrink-0">
        {post.assets && post.assets.length > 0 ? (
          <MediaWrapper aspect={post.assets[0].aspect as AspectRatio}>
            <CardImage
              asset={{
                ...post.assets[0],
                // Don't show videos, only images
                src: isVideoFile(post.assets[0]?.src)
                  ? post.assets[0]?.poster || post.assets[0]?.src || ""
                  : post.assets[0]?.src || "",
              }}
              priority
              sizes="(min-width: 660px) 205px, 100vw"
            />
          </MediaWrapper>
        ) : null}
      </div>

      {/* TEXT */}
      {/* py-1.5 */}
      <div className="flex items-start justify-between gap-2">
        <div className="translate-y-[-0.2em] transform space-y-1">
          <div
            className={cx(
              "relative flex items-center gap-0.5 group-hover:text-accent",
              "ease transition-colors duration-300"
            )}
          >
            <h2 className="font-sans font-medium">{post.title}</h2>
            {post.thumbnailLink && !isComingSoon ? (
              <ArrowTopRightIcon className={cx(ICON_STYLE)} />
            ) : null}
          </div>
          <p className="font-sans text-meta text-solid">
            {post.lede}
            {/* <span className={cx("Text-subheading text-solid")}>
              {date ? format(parseISO(date), "yyyy") : "HEY"}
            </span> */}
          </p>
        </div>
      </div>
    </div>
  );
};
