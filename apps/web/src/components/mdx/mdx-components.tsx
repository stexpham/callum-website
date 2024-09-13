import { components as uiMdxComponents } from "@repo/ui/mdx-components";
import { Available, ContactIcons } from "@/components/elements";

export const components = {
  ...uiMdxComponents,
  Contact: () => <ContactIcons className="!pl-0 pt-0.5" />,
  Available: () => <Available />,
};
