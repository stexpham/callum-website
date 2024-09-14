import { Link } from "@repo/ui/atoms";

interface LinkOrDivProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkOrDiv = ({ href, className, children }: LinkOrDivProps) => {
  return href ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};
