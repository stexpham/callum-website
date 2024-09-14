import type { PolymorphicProps } from "../../../../../packages/ui/src/atoms/polymorphic-element";
import { PolymorphicElement } from "../../../../../packages/ui/src/atoms/polymorphic-element";
import { cx } from "cva";
import * as React from "react";
import { Text } from "@repo/ui/atoms";

type TitleHeaderProps = PolymorphicProps<React.ElementType> & {
  subheading?: React.ReactNode;
  isContained?: boolean;
};

export const TitleHeader = ({
  as,
  children,
  subheading,
  isContained,
  ...props
}: TitleHeaderProps) => {
  return (
    <PolymorphicElement
      as={as || "header"}
      className={cx(
        "flex flex-col space-y-[2px] pb-w8",
        isContained ? "" : "container pt-w20"
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
