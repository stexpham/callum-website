import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Link, Text } from "@repo/ui/atoms";
import { cx } from "cva";
import { type Post } from "contentlayer/generated";
import { iconStyle, transformStyle } from "@/components/card/card-styles";
import { CardTitleMeta } from "@/components/card/card-title-meta";

interface CardInDialogProps {
  post: Post;
  captionClassName?: string;
  children?: React.ReactNode;
  closeNode?: React.ReactNode;
}

export const CardInDialog = ({
  post,
  captionClassName,
  children,
  closeNode,
}: CardInDialogProps) => (
  <>
    {children}

    <div className={cx("relative pt-inset", captionClassName)}>
      {closeNode}
      <Link
        className="group block w-[70%] space-y-[2px] md:w-1/2"
        href={post.thumbnailLink ? post.thumbnailLink : `/${post.slug}`}
      >
        <div className="flex items-center gap-2">
          <Text as="h1" className="group-hover:text-accent" weight="medium">
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
  </>
);
