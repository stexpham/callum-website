import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { Link } from "@repo/ui/next-link";
import type { TextProps } from "@repo/ui/text";
import { Text, textVariants } from "@repo/ui/text";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import { cx } from "cva";
import { highlight } from "sugar-high";
import { ContactIcons, LinkWithArrow, Available } from "@/components/elements";
import type {
  MediaFigureProps,
  MediaDialogProps,
  VideoProps,
} from "@/components/media";
import { MediaDialog, MediaFigure, Video } from "@/components/media";

type HeadingProps = ComponentPropsWithoutRef<"h2">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

interface MdxImageProps extends MediaFigureProps, NextImageProps {}
interface MdxVideoProps extends MediaFigureProps, VideoProps {}

export const noteStyle = [
  "Note !mt-w12 space-y-2 text-meta text-solid",
  "link-block",
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
  h2: ({ children, ...props }: HeadingProps) => (
    <Text
      as="h2"
      className="text-heading [&:not(:first-child)]:!mt-w8"
      intent="heading"
      {...(props as TextProps)}
    >
      {children}
    </Text>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <Text
      as="h3"
      className="Text-subheading [&:not(:first-child)]:!mt-w8"
      intent="metaHeading"
      {...(props as TextProps)}
    >
      {children}
    </Text>
  ),
  h5: ({ id, children, ...props }: HeadingProps) => (
    <div className="scroll-mt-2" id={id}>
      <a className="!no-underline" href={`#${id}`}>
        <Text as="h5" className="inline" {...(props as TextProps)}>
          {children}
        </Text>
      </a>
    </div>
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="py-1" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <div className="py-[0.4em] block rounded-[2px] bg-background p-w6 font-mono text-[0.875em]">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      </div>
    );
  },
  hr: () => (
    <div className={cx(noteStyle)}>
      <hr />
    </div>
  ),
  Note: (props: ComponentPropsWithoutRef<"div">) => (
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
  Video: ({
    id,
    src,
    poster,
    aspect,
    allowSound,
    theme,
    caption,
    showBorder,
    showBackground = true,
    showRounded = true,
  }: MdxVideoProps) => (
    <MediaFigure
      aspect={aspect}
      caption={caption}
      id={id}
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
    >
      <Video
        allowSound={allowSound}
        aspect={aspect}
        poster={poster}
        src={src}
      />
    </MediaFigure>
  ),
  MediaDialogVideo: ({
    src,
    poster,
    aspect,
    allowSound,
    title = "Media Dialog Video",
    theme,
    showBorder = true,
    showBackground = true,
    showRounded = true,
  }: MediaDialogProps & VideoProps) => (
    <MediaDialog
      aspect={aspect}
      buttonNode={
        <Video
          allowSound={allowSound}
          aspect={aspect}
          poster={poster}
          src={src}
        />
      }
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
      title={title}
    >
      <Video
        allowSound={allowSound}
        aspect={aspect}
        poster={poster}
        src={src}
      />
    </MediaDialog>
  ),
  MediaDialogImage: ({
    src,
    alt,
    aspect,
    title = "Media Dialog Image",
    theme,
    showBorder = true,
    showBackground = true,
    showRounded = true,
    ...props
  }: MediaDialogProps & NextImageProps) => (
    <MediaDialog
      aspect={aspect}
      buttonNode={
        <NextImage
          alt={alt}
          className="w-full object-cover"
          src={src}
          {...props}
        />
      }
      showBackground={showBackground}
      showBorder={showBorder}
      showRounded={showRounded}
      theme={theme}
      title={title}
    >
      <NextImage
        alt={alt}
        className="w-full object-cover"
        src={src}
        {...props}
      />
    </MediaDialog>
  ),
};
