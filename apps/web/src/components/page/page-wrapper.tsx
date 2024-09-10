"use client";

import { useRef } from "react";
import { useIntersection } from "react-use";
import { cx } from "~/cva.config";
import { Nav } from "@/components/nav";
import { FooterScreen } from "@/components/footer/footer-screen";

// "/stream"
const NAV = ["/about", "/work", "/writing"];

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
        navItems={NAV}
        ruleClassName={cx(
          intersection && intersection.intersectionRatio < 1
            ? ""
            : "!border-transparent"
        )}
      />

      {children}

      <FooterScreen intersectionRef={intersectionRef} ruleClassName="">
        {footerChildren}
      </FooterScreen>
    </>
  );
};
