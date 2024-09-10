import { cx } from "class-variance-authority";
import { OutsetRule } from "../outset-rule";

interface FooterWrapperProps {
  children: React.ReactNode;
  className?: string;
  isHome?: boolean;
  showAsScreen?: boolean;
  showRule?: boolean;
  ruleClassName?: string;
}

export const FooterWrapper = ({
  children,
  isHome,
  showRule,
  showAsScreen,
  className,
  ruleClassName,
}: FooterWrapperProps) => (
  <>
    {showRule ? (
      <OutsetRule className={ruleClassName} wrapperClassName="relative z-20" />
    ) : null}
    <footer
      className={cx(
        "container relative flex flex-col",
        isHome && "mt-auto pt-w12",
        showAsScreen &&
          "relative min-h-[calc(100vh-var(--height-nav))] justify-between pt-w20",
        className
      )}
    >
      {children}
    </footer>
  </>
);
