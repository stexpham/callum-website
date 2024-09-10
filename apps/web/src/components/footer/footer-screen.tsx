import { TitleHeader } from "../title-header";
import { FooterWrapper } from "./footer-wrapper";
import { Signoff } from "./signoff";

export const FooterScreen = ({
  children,
  showRule = true,
  ruleClassName,
  intersectionRef,
}: {
  children?: React.ReactNode;
  showRule?: boolean;
  ruleClassName: string;
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
