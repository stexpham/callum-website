import type { HTMLAttributes } from "react";
import type { VariantProps } from "cva";
import { cx, cva } from "cva";

/* 
  Prose applies parent styles to Markdown blocks.
  The markdown styles are set in mdx-components using Text,
  except for these below, which require targeting from the parent.
 */

export const proseVariants = cva({
  base: [
    "Prose space-y-2.5 group",
    "[&_strong]:font-medium",
    "[&_em]:not-italic",
    "[&_.Note+.Note]:!mt-2",
    // Code
    "[&_code]:text-[0.825em] [&_code]:bg-background-active [&_code]:font-mono",
    "[&_code]:px-[2px] [&_code]:rounded-soft",
  ],
});

export interface ProseProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof proseVariants> {}

export const Prose = ({ className, ...props }: ProseProps) => {
  return <div className={cx(proseVariants({ className }))} {...props} />;
};
