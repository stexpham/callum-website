import { cx } from "cva";
import * as React from "react";
import { Text } from "../atoms/text";
import type { PolymorphicProps } from "../atoms/polymorphic-element";
import { PolymorphicElement } from "../atoms/polymorphic-element";

type TitleHeaderProps = PolymorphicProps<React.ElementType> & {
  subheading?: React.ReactNode;
  isContained?: boolean;
  className?: string;
};

export const TitleHeader = ({
  as,
  children,
  subheading,
  isContained,
  className,
  ...props
}: TitleHeaderProps) => {
  return (
    <PolymorphicElement
      as={as || "header"}
      className={cx(
        "flex flex-col space-y-[2px] pb-w8",
        isContained ? "" : "container pt-w20",
        className
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <Text as="h1" intent="title">
          {children}
        </Text>
      ) : (
        children
      )}
      {subheading ? (
        <Text as="p" dim intent="meta">
          {subheading}
        </Text>
      ) : null}
    </PolymorphicElement>
  );
};
