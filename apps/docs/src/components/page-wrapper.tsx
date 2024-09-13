"use client";

import { useRef } from "react";
import { useIntersection } from "react-use";
import { cx } from "cva";
import { Nav } from "@repo/ui/nav";
import config from "@repo/ui/config";
import { FooterShape } from "@repo/ui/footer-shape";
import { TitleHeader } from "@repo/ui/title-header";

export const PageWrapper = ({
  activeNav,
  showRootActive,
  children,
  footerChildren,
}: {
  activeNav?: string;
  showRootActive?: boolean;
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
        anchorName="Notes"
        navItems={[
          { href: "/index", label: "Index" },
          { href: "/random", label: "Random" },
          { href: "/patterns", label: "Patterns" },
          { href: config.PUBLIC_URL, label: "Callum" },
        ]}
        ruleClassName={cx(
          intersection && intersection.intersectionRatio < 1
            ? ""
            : "!border-transparent"
        )}
        showRootActive={showRootActive}
      />

      {children}

      <FooterShape intersectionRef={intersectionRef}>
        <TitleHeader as="div" isContained>
          HEY!!!
        </TitleHeader>
        {footerChildren}
      </FooterShape>
    </>
  );
};
