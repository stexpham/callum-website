"use client";

import { Nav } from "@repo/ui/nav";
import { cx } from "cva";
import { useRef } from "react";
import { useIntersection } from "react-use";
import config from "@repo/ui/config";
import { FooterScreen } from "./footer-screen";

export const PageWrapper = ({
  activeNav,
  children,
  footerChildren,
}: {
  activeNav?: string;
  children: React.ReactNode;
  footerChildren?: React.ReactNode;
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <>
      <Nav
        activeNav={activeNav}
        anchorName="Callum"
        navItems={[
          { href: "/about", label: "About" },
          { href: "/work", label: "Work" },
          { href: "/writing", label: "Writing" },
          { href: config.PUBLIC_NOTES_URL, label: "Notes" },
        ]}
        ruleClassName={cx(
          intersection && intersection.intersectionRatio < 1
            ? ""
            : "!border-transparent"
        )}
      />

      {children}

      <FooterScreen intersectionRef={intersectionRef}>
        {footerChildren}
      </FooterScreen>
    </>
  );
};
