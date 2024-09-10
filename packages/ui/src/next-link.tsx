import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link = ({ href, children, ...props }: LinkProps) => {
  const isExternal = /^(?:https?:)?\/\/|mailto:/.test(href);

  return isExternal ? (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  ) : (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
};
