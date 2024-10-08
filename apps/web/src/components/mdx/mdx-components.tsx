import { useMDXComponent } from "next-contentlayer2/hooks";
import { components as uiMdxComponents } from "@repo/ui/mdx-components";
import { Prose } from "@repo/ui/elements";
import type { ComponentPropsWithoutRef } from "react";
import { Available, ContactIcons } from "~/src/components/elements";
import { cx } from "cva";

export const components = {
  ...uiMdxComponents,
  Contact: () => <ContactIcons className="!pl-0 pt-0.5" />,
  Available: () => <Available />,
  Callout: ({ children }: DivProps) => <Callout>{children}</Callout>,
};

interface MdxProps {
  code: string;
  children?: React.ReactNode;
}

export function Mdx({ code, children }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Prose>
      <Component components={components} />

      {/* allow children to be passed in to make it easy to compose eg. ContactIcons or Available components */}
      {children}
    </Prose>
  );
}

type DivProps = ComponentPropsWithoutRef<"div">;

const Callout = ({ children }: DivProps) => (
  <div
    className={cx(
      "bg-highlight-background px-3 py-2.5 rounded-soft space-y-1.5",
      "[&_code]:bg-black-a2"
    )}
  >
    {/* <CalloutIcon className="size-[1.25em]" /> */}
    {children}
  </div>
);
