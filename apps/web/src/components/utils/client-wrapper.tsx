"use client";

import { usePathname } from "next/navigation";
import { cx } from "class-variance-authority";

export function ClientWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const pathname = usePathname();
  return (
    <body
      className={cx(pathname === "/" ? "bg-background-body" : "", className)}
    >
      {children}
    </body>
  );
}
