import type { VariantProps } from "cva";
import { cva } from "cva";

/* uses the spacing scale in packages/tailwind/tailwind.config.tx */

export const spacingVariants = cva({
  base: "",
  variants: {
    intent: {
      "h-tab": "h-tab",
      "t-tab": "pt-tab",
      "b-bab": "pt-tab",

      "t-xs": "pt-w4",
      "b-xs": "pb-w4",
      "y-xs": "py-w4",

      "t-sm": "pt-w8",
      "b-sm": "pb-w8",
      "y-sm": "py-w8",

      "t-md": "pt-w12",
      "b-md": "pb-w12",
      "y-md": "py-w12",

      "t-lg": "pt-w20",
      "b-lg": "pb-w20",
      "y-lg": "py-w20",

      "t-xl": "pt-w24",
      "b-xl": "pb-w24",
      "y-xl": "py-w24",
    },
  },
});

export type SpacingProps = VariantProps<typeof spacingVariants>;
