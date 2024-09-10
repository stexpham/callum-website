"use client";

import { Link } from "@repo/ui/next-link";
import { textVariants } from "@repo/ui/text";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { useWindowScroll } from "react-use";
import { OutsetRule } from "./outset-rule";

const linkStyle = [
  "h-tab flex items-center relative hover:text-accent",
  "before:absolute before:left-[-2px] before:right-[-2px] before:bottom-[-1px] before:border-b",
];

interface NavProps {
  ruleClassName?: string;
  activeNav?: string;
  navItems: string[];
  anchorName: string;
}

export const Nav = ({
  ruleClassName,
  activeNav,
  navItems,
  anchorName,
}: NavProps) => {
  const pathname = usePathname();
  const { y } = useWindowScroll();

  return (
    <div
      // bg-opacity-70 backdrop-blur-md
      className="Nav sticky top-0 z-[11] bg-canvas"
      id="top"
    >
      <nav
        className={cx(
          "container flex justify-between",
          // create the height of the nav
          "pt-[calc(theme(spacing.nav)-theme(spacing.tab))]"
        )}
      >
        <Link
          className={cx(
            textVariants({ intent: "metaHeading" }),
            linkStyle,
            "pl-0 before:left-0",
            pathname === "/"
              ? "before:border-fill hover:before:border-accent"
              : "before:border-transparent"
          )}
          href="/"
        >
          {anchorName}
        </Link>
        <div className="flex items-center gap-4">
          {navItems.map((nav) => (
            <NavLink
              href={nav}
              isActive={pathname === nav || activeNav === nav}
              key={nav}
            >
              {nav}
            </NavLink>
          ))}
        </div>
      </nav>
      <OutsetRule
        className={cx(
          y > 150 ? "border-border" : "border-transparent",
          ruleClassName
        )}
      />
    </div>
  );
};

const NavLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: string;
}) => (
  <Link
    className={cx(
      textVariants({ intent: "metaHeading" }),
      linkStyle,
      isActive
        ? "before:border-fill hover:before:border-accent"
        : "before:border-transparent"
    )}
    href={href}
  >
    {/* extract the href "/" from the children string */}
    {children.replace(/^\/|\/$/g, "")}
  </Link>
);
