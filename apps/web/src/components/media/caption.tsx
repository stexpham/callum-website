import { Text } from "@repo/ui/text";

export const Caption = ({ children }: { children: React.ReactNode }) => (
  <Text as="figcaption" dim intent="meta">
    {children}
  </Text>
);
