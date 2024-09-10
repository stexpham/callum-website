import type { SVGProps } from "react";

export type SVGBoxProps = SVGProps<SVGSVGElement>;
export interface SVGStyleProps {
  boxSize?: string;
  useBoxSize?: boolean;
  viewbox?: string;
  className?: string;
}
export type SVGIconProps = SVGBoxProps & SVGStyleProps;

export const SVG = ({
  useBoxSize = true,
  boxSize = "1em",
  viewbox = "0 0 32 32",
  className,
  ...props
}: SVGIconProps) => (
  <svg
    className={className}
    fill="none"
    style={
      useBoxSize
        ? {
            width: boxSize,
            height: boxSize,
          }
        : {}
    }
    viewBox={viewbox}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {props.children}
  </svg>
);
