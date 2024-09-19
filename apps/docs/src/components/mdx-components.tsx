import { useMDXComponent } from "next-contentlayer2/hooks";
import { components as uiMdxComponents } from "@repo/ui/mdx-components";
import { Prose } from "@repo/ui/elements";

interface MdxProps {
  code: string;
  children?: React.ReactNode;
}

export function Mdx({ code, children }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Prose>
      <Component components={uiMdxComponents} />

      {/* allow children to be passed in to make it easy to compose eg. ContactIcons or Available components */}
      {children}
    </Prose>
  );
}
