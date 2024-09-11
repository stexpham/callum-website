import type { VariantProps } from "cva";
import { cx, cva } from "../cva.config";
// import { cx, cva } from "cva";

// import { ThemeColors } from "@/styles/colors.type";
// this overwrites the text-* classes. DUH CN.
// import { cn } from "@/utils/shadcn-utils";

/* TODO: prose system from textVariants */

// [&_em]:font-serif

export const textVariants = cva({
  base: "",
  variants: {
    intent: {
      link: "link", // specified in theme-utils.css
      fine: "text-fine", // subpixel-antialiased?
      metaHeading: "text-fine font-bold uppercase tracking-metaHeading",
      meta: "text-meta",
      body: "text-base font-normal",
      heading: "text-heading font-medium",
      title: "text-title font-medium",
    },
    color: {
      "solid-light": "text-solid-light",
      solid: "text-solid",
      fill: "text-fill",
      "fill-tint": "text-fill-tint",
      accent: "text-accent",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    caps: {
      true: "uppercase",
    },
    inline: {
      true: "leading-none",
    },
    balance: {
      true: "text-balance",
    },
    bullet: {
      true: [
        // "relative before:content-['']",
        // "before:absolute before:inline-block before:bg-current",
        // "before:-left-[1.25em] before:top-[0.66em] before:h-[0.05em] before:w-[1em]",
        "list-disc",
      ],
    },
    dim: {
      true: "!text-solid",
    },
  },
  // Compound variants apply classes when multiple other variant conditions are met: https://cva.style/docs/getting-started/variants#compound-variants
  compoundVariants: [
    // {
    //   caps: true,
    //   size: ["heading"],
    //   class: "!tracking-[0.05em]",
    // },
  ],
  defaultVariants: {
    intent: "body",
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Text = ({
  as: Component = "p",
  className,
  intent,
  color,
  weight,
  align,
  caps,
  inline,
  balance,
  bullet,
  dim,
  children,
  ...props
}: TextProps) => {
  const bulletProp = Component === "li" ? true : bullet;

  const formattedChildren: React.ReactNode =
    typeof children === "string" ? formatText(children) : children;

  return (
    <Component
      {...props}
      className={cx(
        textVariants({
          intent,
          color,
          weight,
          align,
          caps,
          inline,
          balance,
          bullet: bulletProp,
          dim,
          className,
        }),
        Component === "ul" ? "pl-[2em]" : ""
      )}
    >
      {formattedChildren}
    </Component>
  );
};

function formatText(text: string): string {
  return text
    .replace(/'/g, "'")
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .replace(/'/g, "'");
}
