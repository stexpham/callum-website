import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { cx } from "cva";
import { Text } from "@repo/ui/atoms";
import { isVideoFile } from "@repo/ui/utils";
import type { AspectRatio } from "@repo/ui/media";
import { MediaWrapper } from "@repo/ui/media";
import { type Post } from "contentlayer/generated";
import { CardImage } from "@/components/card";
import { postIconStyle } from "./post.styles";
import { PostLinkHeadingWrapper } from "./post-link-heading-wrapper";

interface PostLinkBlockProps {
  post: Post;
  isComingSoon?: boolean;
}

export const PostLinkBlock = ({ post, isComingSoon }: PostLinkBlockProps) => {
  return (
    <div className="group flex flex-col gap-w6 sm:flex-row">
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
      <div className="translate-y-[-0.2em] transform space-y-1">
        <PostLinkHeadingWrapper>
          <Text as="h2" weight="medium">
            {post.title}
          </Text>
          {post.thumbnailLink && !isComingSoon ? (
            <ArrowTopRightIcon className={cx(postIconStyle)} />
          ) : null}
        </PostLinkHeadingWrapper>
        <Text dim intent="meta">
          {post.lede}
          {/* <span className={cx("Text-subheading text-solid")}>
              {date ? format(parseISO(date), "yyyy") : "HEY"}
            </span> */}
        </Text>
      </div>
    </div>
  );
};
