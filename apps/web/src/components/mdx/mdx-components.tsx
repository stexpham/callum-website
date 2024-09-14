import { useMDXComponent } from "next-contentlayer2/hooks";
import { components as uiMdxComponents } from "@repo/ui/mdx-components";
import { Prose } from "@repo/ui/elements";
import { Available, ContactIcons } from "~/src/components/elements";

export const components = {
  ...uiMdxComponents,
  Contact: () => <ContactIcons className="!pl-0 pt-0.5" />,
  Available: () => <Available />,
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

      {/* allow children to be passed in, make it easy to compose eg. ContactIcons or Available components */}
      {children}
    </Prose>
  );
}
