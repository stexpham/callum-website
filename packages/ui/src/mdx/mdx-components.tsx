import { cx } from "cva";
import type { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";
import { Link } from "../atoms/next-link";
import type { TextProps } from "../atoms/text";
import { Text, textVariants } from "../atoms/text";
import { LinkWithArrow } from "../elements";
import { MediaDialogImage } from "../composites/media-dialog-image";
import { MediaDialogVideo } from "../composites/media-dialog-video";
import { MdxImage } from "./mdx-image";
import { MdxVideo } from "./mdx-video";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type HeadingProps = ComponentPropsWithoutRef<"h2">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export const noteStyle = [
  "Note !mt-w12 space-y-2 text-meta text-solid link-block",
  "[&_p]:text-meta [&_p]:text-solid",
];

export const components = {
  a: ({ href, ...props }: AnchorProps) => {
    const isExternal = href && /^(?:https?:)?\/\//.test(href);
    return isExternal ? (
      <LinkWithArrow
        className={cx(textVariants({ intent: "link" }))}
        href={href}
        {...props}
      />
    ) : (
      <Link
        className={cx(textVariants({ intent: "link" }))}
        href={href || "#"}
        {...props}
      />
    );
  },
  p: ({ children, ...props }: ParagraphProps) => (
    <Text as="p" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  ul: ({ children, ...props }: ListProps) => (
    <Text as="ul" className="space-y-0.5 pl-5" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  ol: ({ children, ...props }: ListProps) => (
    <Text as="ol" className="space-y-0.5 pl-5" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li
      className="relative before:content-[''] before:absolute before:inline-block before:bg-current before:-left-[1.3em] before:top-[0.75em] before:h-px before:w-[14px]"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <Text
      as="blockquote"
      {...(props as TextProps)}
      className={cx(
        "pb-2 group",
        "[&_p]:pb-0 [&_p]:border-l [&_p]:border-border-hover [&_p]:pl-2.5 [&_p]:text-solid-hover md:[&_p]:pl-4",
        "group-[&_strong]:table group-[&_strong]:pt-[calc(5/16*1em)] group-[&_strong]:text-meta group-[&_strong]:!font-normal"
      )}
    >
      {children}
    </Text>
  ),
  h2: (props: HeadingProps) => <HeadingWithId as="h2" {...props} />,
  h3: (props: HeadingProps) => <HeadingWithId as="h3" {...props} />,
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="Pre py-1" {...props}>
      <div
        className={cx(
          "CodeWrapper bg-background-hover rounded-soft overflow-auto",
          "[&_code]:overflow-auto [&_code]:py-2.5 [&_code]:pl-3 [&_code]:block",
          "[&_code]:leading-[1.6]",
          // overwrite prose code styles
          "[&_code]:bg-transparent"
        )}
      >
        {children}
      </div>
    </pre>
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  hr: () => (
    <div className={cx(noteStyle)}>
      <hr />
    </div>
  ),
  Note: (props: ComponentPropsWithoutRef<"div">) => (
    <div className={cx(noteStyle)} {...props} />
  ),
  Img: MdxImage,
  Video: MdxVideo,
  MediaDialogVideo,
  MediaDialogImage,
};

type HeadingWithIdProps = HeadingProps &
  Pick<TextProps, "as" | "intent"> & {
    as: "h2" | "h3";
    children?: React.ReactNode;
  };

function HeadingWithId({ as, children }: HeadingWithIdProps) {
  const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
  return (
    <Text
      as={as}
      className="group/heading scroll-mt-[calc(theme(spacing.nav)+theme(spacing.inset))] [&:not(:first-child)]:!mt-w8"
      id={id}
      intent={as === "h2" ? "heading" : "fineHeading"}
    >
      {children ? (
        <Link
          aria-hidden="true"
          className="relative !no-underline"
          href={`#${id}`}
        >
          <span className="absolute -left-em top-1/2 -translate-y-1/2 opacity-0 group-hover/heading:opacity-100 transition-opacity">
            #
          </span>

          {children}
        </Link>
      ) : null}
    </Text>
  );
}
