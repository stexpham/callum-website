import type { HTMLAttributes } from "react";
import type { VariantProps } from "cva";
import { cx, cva } from "../cva.config";

export const proseVariants = cva({
  base: [
    "space-y-2.5",
    // "[&_blockquote]:pb-2",
    // "[&_blockquote_p]:border-l [&_blockquote_p]:border-border-hover [&_blockquote_p]:pl-2.5 [&_blockquote_p]:text-solid-hover md:[&_blockquote_p]:pl-4",
    // Citation === blockquote_p_strong
    // "[&_.Citation]:table [&_.Citation]:pt-[5px] [&_.Citation]:text-meta [&_.Citation]:!font-normal",
    // "[&_blockquote_p_strong]:table [&_blockquote_p_strong]:pt-[5px] [&_blockquote_p_strong]:text-meta [&_blockquote_p_strong]:!font-normal",
    // "[&_strong]:font-semibold",
    // "[&_em]:not-italic",
    // "[&_ol]:space-y-0.5 [&_ol]:pl-5",
    // "[&_ul]:space-y-0.5 [&_ul]:pl-5",
    // "[&_li]:relative",
    // "[&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:inline-block [&_li]:before:bg-current",
    // "[&_li]:before:-left-[1.3em] [&_li]:before:top-[0.75em] [&_li]:before:h-px [&_li]:before:w-[14px]",
    // "[&_h2]:text-heading",
    // "[&_h3]:Text-subheading",
    // "[&_h2:not(:first-child)]:!mt-w8",
    // "[&_h3:not(:first-child)]:!mt-w8",
    "[&_p+.Image:first-of-type]:pb-0",
    "[&_.Image+h2]:!mt-w4",
    "[&_.Image+h3]:!mt-w4",
    // "[&_pre]:py-1",
    // "[&_.Note]:!mt-w12 [&_.Note]:space-y-2",
    // "[&_.Note]:text-meta [&_.Note]:text-solid-hover",
    "[&_.Note+.Note]:!mt-3",
  ],
});

interface ProseProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof proseVariants> {}

export const Prose = ({ className, ...props }: ProseProps) => {
  return <div className={cx(proseVariants({ className }))} {...props} />;
};
