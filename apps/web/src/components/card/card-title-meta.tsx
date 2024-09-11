import {
  ArrowTopRightIcon,
  EyeOpenIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";
import { cx } from "cva";
import { Text } from "@repo/ui/text";
import { getYear } from "@/utils";
import { type Post } from "contentlayer/generated";
import { iconStyle, transformStyle } from "./card-styles";

interface CardTitleMetaProps {
  post: Post;
  className?: string;
  thumbnailLink?: string | undefined;
}

export const CardTitleMeta = ({
  post,
  className,
  thumbnailLink,
}: CardTitleMetaProps) => {
  const endYear = post.endDate ? getYear(post.endDate) : null;

  return (
    <Text
      className={cx("flex shrink-0 items-center gap-2", className)}
      dim
      intent="meta"
    >
      <CardIcon post={post} />
      <span>
        <span>{getYear(post.date)}</span>
        {endYear ? (
          <>
            &ndash;<span>{endYear}</span>
          </>
        ) : null}
      </span>
      {thumbnailLink ? (
        <ArrowTopRightIcon className={cx(iconStyle, transformStyle)} />
      ) : null}
    </Text>
  );
};

export const CardIcon = ({ post }: { post: Post }) => {
  if (post.category === "writing") {
    return <QuoteIcon className={cx(iconStyle, transformStyle)} />;
  }
  if (post.category === "projects") {
    return <EyeOpenIcon className={cx(iconStyle, transformStyle)} />;
  }
  return null;
};
