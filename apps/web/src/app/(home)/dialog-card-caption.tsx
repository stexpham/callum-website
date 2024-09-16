import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Link, Text } from "@repo/ui/atoms";
import { cx } from "cva";
import { type Post } from "contentlayer/generated";
import { iconStyle, transformStyle } from "@/components/card/card-styles";
import { CardTitleMeta } from "@/components/card/card-title-meta";

interface DialogCardCaptionProps {
  post: Post;
  className?: string;
  innerClassName?: string;
  closeNode?: React.ReactNode;
}

export const DialogCardCaption = ({
  post,
  className,
  innerClassName,
  closeNode,
}: DialogCardCaptionProps) => (
  <div className={cx("DialogCardCaption", className)}>
    <div className={cx("relative", innerClassName)}>
      {closeNode}
      <Link
        className="group block w-[70%] space-y-[2px] md:w-1/2"
        href={post.thumbnailLink ? post.thumbnailLink : `/${post.slug}`}
      >
        <div className="flex items-center gap-2">
          <Text as="h2" className="group-hover:text-accent" weight="medium">
            {post.title}
          </Text>
          <CardTitleMeta post={post} />
        </div>
        <Text className="pt-1" dim intent="meta">
          {post.lede}{" "}
          <span className="link inline-flex items-center gap-0.5 text-solid group-hover:text-solid group-hover:decoration-solid">
            Read case study
            {post.thumbnailLink ? (
              <ArrowTopRightIcon className={cx(iconStyle, transformStyle)} />
            ) : (
              <ArrowRightIcon className={cx(iconStyle, transformStyle)} />
            )}
          </span>
        </Text>
      </Link>
    </div>
  </div>
);
