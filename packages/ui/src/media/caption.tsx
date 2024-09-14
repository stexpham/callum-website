import { Text } from "../atoms/text";

export const Caption = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Text as="figcaption" className={className} dim intent="meta">
    {children}
  </Text>
);
