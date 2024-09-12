"use client";

import { useRef } from "react";
import { useIntersection } from "react-use";
import { cx } from "cva";
import { NAV_ITEMS } from "~/src/data";
import { Nav } from "./nav";
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
        navItems={NAV_ITEMS}
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
