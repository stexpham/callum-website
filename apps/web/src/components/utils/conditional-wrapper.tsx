// see: https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

interface Props {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactComponentElement<any>;
  children: React.ReactNode;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
  condition ? wrapper(<>{children}</>) : <>{children}</>;
