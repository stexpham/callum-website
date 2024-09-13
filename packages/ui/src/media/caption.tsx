import { Text } from "../text";

export const Caption = ({ children }: { children: React.ReactNode }) => (
  <Text as="figcaption" dim intent="meta">
    {children}
  </Text>
);
