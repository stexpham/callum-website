import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Text } from "@repo/ui/atoms";
import { mediaWrapperVariants } from "@repo/ui/media";
import { isVideoFile } from "@repo/ui/utils";
import { cx } from "cva";
import { type Post } from "contentlayer/generated";
import { CardImage } from "@/components/card";
import { PostLinkHeadingWrapper } from "./post-link-heading-wrapper";
import { postIconStyle } from "./post.styles";

interface PostLinkBlockProps {
  post: Post;
  isComingSoon?: boolean;
}

export const PostLinkBlock = ({ post, isComingSoon }: PostLinkBlockProps) => {
  return (
    <div className="group flex flex-col gap-w6 sm:flex-row">
      <div className="w-full sm:w-1/3 sm:shrink-0">
        {post.assets && post.assets.length > 0 ? (
          <CardImage
            asset={{
              ...post.assets[0],
              // Don't show videos, only images
              src: isVideoFile(post.assets[0]?.src)
                ? post.assets[0]?.poster || post.assets[0]?.src || ""
                : post.assets[0]?.src || "",
            }}
            className={cx(mediaWrapperVariants({}))}
            priority
            sizes="(min-width: 660px) 205px, 100vw"
          />
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
