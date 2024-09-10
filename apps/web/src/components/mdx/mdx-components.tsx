import { Link } from "@repo/ui/next-link";
import type { TextProps } from "@repo/ui/text";
import { Text, textVariants } from "@repo/ui/text";
// import type { MDXComponents } from "mdx/types";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { ContactIcons } from "@/components/site";
import type { MediaFigureProps } from "@/components/media/media.type";
import { MediaFigure } from "@/components/media";
import { LinkWithArrow } from "@/components/link-variants";
import { cx } from "~/cva.config";
import { Available } from "./available";

interface MdxImageProps extends MediaFigureProps, NextImageProps {}
// interface MdxVideoProps extends MediaFigureProps, VideoProps {}

const noteStyle = [
  "Note !mt-w12 space-y-2",
  textVariants({ intent: "meta", dim: true }),
];

export const components = {
  a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href && /^(?:https?:)?\/\//.test(href);
    return isExternal ? (
      <LinkWithArrow
        className={textVariants({ intent: "link" })}
        href={href}
        {...props}
      />
    ) : (
      <Link
        className={textVariants({ intent: "link" })}
        href={href || "#"}
        {...props}
      />
    );
  },
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <Text as="ul" className="space-y-0.5 pl-5" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  ol: ({ children, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <Text as="ol" className="space-y-0.5 pl-5" {...(props as TextProps)}>
      {children}
    </Text>
  ),
  li: ({ children, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className="relative before:content-[''] before:absolute before:inline-block before:bg-current before:-left-[1.3em] before:top-[0.75em] before:h-px before:w-[14px]"
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <Text
      as="blockquote"
      {...(props as TextProps)}
      className={cx(
        "pb-2",
        "[&_p]:pb-0 [&_p]:border-l [&_p]:border-border-hover [&_p]:pl-2.5 [&_p]:text-solid-hover md:[&_p]:pl-4",
        // Citation too?
        "[&_blockquote_p_strong]:table [&_blockquote_p_strong]:pt-[5px] [&_blockquote_p_strong]:text-meta [&_blockquote_p_strong]:!font-normal"
      )}
    >
      {children}
    </Text>
  ),
  strong: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <em className="not-italic" {...props}>
      {children}
    </em>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      as="h2"
      className="text-heading [&:not(:first-child)]:!mt-w8"
      intent="heading"
      {...(props as TextProps)}
    >
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      as="h3"
      className="Text-subheading [&:not(:first-child)]:!mt-w8"
      intent="metaHeading"
      {...(props as TextProps)}
    >
      {children}
    </Text>
  ),
  h5: ({ id, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <div className="scroll-mt-2" id={id}>
      <a className="!no-underline" href={`#${id}`}>
        <Text as="h5" className="inline" {...(props as TextProps)}>
          {children}
        </Text>
      </a>
    </div>
  ),
  pre: ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre className="py-1" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <div className="py-[0.4em]">
      <div
        className="block rounded-[2px] bg-background p-w6 font-mono text-[0.875em]"
        {...props}
      >
        {children}
      </div>
    </div>
  ),
  hr: () => (
    <div className={cx(noteStyle)}>
      <hr />
    </div>
  ),
  Note: (props: HTMLAttributes<HTMLDivElement>) => (
    <div className={cx(noteStyle)} {...props} />
  ),
  Contact: () => <ContactIcons className="!pl-0 pt-0.5" />,
  Available: () => <Available />,
  Img: ({
    id,
    src,
    alt,
    aspect,
    theme,
    sizes = "(min-width: 660px) 620px, 100vw",
    showBorder,
    showBackground = true,
    showRounded = true,
    darkSchemeInvert,
    caption,
    ...props
  }: MdxImageProps) => (
    <MediaFigure
      aspect={aspect}
      caption={caption}
      darkSchemeInvert={darkSchemeInvert}
      id={id}
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
    >
      <NextImage
        alt={alt || ""}
        className="w-full object-cover"
        sizes={sizes}
        src={src}
        {...props}
      />
    </MediaFigure>
  ),
};
