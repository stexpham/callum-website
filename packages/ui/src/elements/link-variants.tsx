import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { cx } from "cva";
import type { AnchorHTMLAttributes } from "react";
import { Link } from "../atoms/next-link";

interface LinkWithArrowProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  iconClassName?: string;
}

export const LinkWithArrow = ({
  href,
  children,
  className,
  iconClassName,
}: LinkWithArrowProps) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      className={cx(
        isExternal ? "pr-[0.2em]" : "inline-flex items-center gap-[2px]",
        className
      )}
      href={href}
    >
      {children}
      {isExternal ? (
        <span className="relative">
          <ArrowTopRightIcon
            className={cx(
              "absolute right-[-0.425em] top-[0.3em] h-[0.45em] w-[0.45em] !no-underline",
              iconClassName
            )}
          />
        </span>
      ) : (
        <ArrowRightIcon className="translate-y-[0.05em] transform" />
      )}
    </Link>
  );
};
