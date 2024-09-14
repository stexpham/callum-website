import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Link } from "@repo/ui/atoms";
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
          <h1 className="font-medium group-hover:text-accent">{post.title}</h1>
          <CardTitleMeta post={post} />
        </div>
        <p className="pt-1 text-meta text-solid">
          {post.lede}{" "}
          <span className="link inline-flex items-center gap-0.5 text-solid group-hover:text-solid group-hover:decoration-solid">
            Read case study
            {post.thumbnailLink ? (
              <ArrowTopRightIcon className={cx(iconStyle, transformStyle)} />
            ) : (
              <ArrowRightIcon className={cx(iconStyle, transformStyle)} />
            )}
          </span>
        </p>
      </Link>
    </div>
  </>
);
