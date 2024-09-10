import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "cva";
import { cx, cva } from "../cva.config";
import { textVariants } from "./text";

/* transition everywhere */
// transition: color 50ms ease 0s;
export const bodyVariants = cva({
  base: [
    "relative min-h-screen",
    "antialiased",
    "font-sans",
    "bg-canvas text-fill",
    textVariants({ intent: "body" }),
  ],
});

export interface BodyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof bodyVariants> {
  asChild?: boolean;
}

export const Body = ({ className, asChild = false, ...props }: BodyProps) => {
  const Comp = asChild ? Slot : "body";
  return <Comp className={cx(bodyVariants({ className }))} {...props} />;
};
