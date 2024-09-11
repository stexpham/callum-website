import type { SVGIconProps } from "@repo/ui/svg";
import { SVG as SVGComponent } from "@repo/ui/svg";

// material-symbols:arrow-top-right
export const ArrowTopRight = (props: SVGIconProps) => (
  <SVGComponent viewbox="0 0 24 24" {...props}>
    <path
      d="M5 20V8h11.175l-3.6-3.575L14 3l6 6l-6.025 6.025l-1.4-1.425l3.6-3.6H7v10z"
      fill="currentColor"
    />
  </SVGComponent>
);
