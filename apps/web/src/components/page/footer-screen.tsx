import { TitleHeader } from "@repo/ui/elements";
import { Signoff } from "~/src/components/elements";
import { FooterWrapper } from "./footer-wrapper";

export const FooterScreen = ({
  children,
  showRule = true,
  ruleClassName,
  intersectionRef,
}: {
  children?: React.ReactNode;
  showRule?: boolean;
  ruleClassName?: string;
  intersectionRef?: React.RefObject<HTMLDivElement>;
}) => (
  <FooterWrapper ruleClassName={ruleClassName} showAsScreen showRule={showRule}>
    <TitleHeader as="div" isContained>
      <Signoff />
    </TitleHeader>

    {children}

    {intersectionRef ? (
      <div className="absolute bottom-0 h-px" ref={intersectionRef} />
    ) : null}
  </FooterWrapper>
);
