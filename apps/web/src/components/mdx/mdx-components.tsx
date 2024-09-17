import { useMDXComponent } from "next-contentlayer2/hooks";
import { components as uiMdxComponents } from "@repo/ui/mdx-components";
import { Prose } from "@repo/ui/elements";
import type { ComponentPropsWithoutRef } from "react";
import { Available, ContactIcons } from "~/src/components/elements";

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
  <div className="flex items-center gap-2 bg-secondAccent-background px-3 py-2.5 rounded-soft">
    {/* <CalloutIcon className="size-[1.25em]" /> */}
    {children}
  </div>
);
