import { Text, Link } from "@repo/ui/atoms";
import { ContactIcons } from "./contact-icons";
import { SiteTime } from "./site-time";

// Callum Flack is a designer who codes.
// Callum Flack. Design. Code. Writing.
const heading = "Callum Flack designs and builds beautiful hypertext products.";

export const Signoff = () => {
  return (
    <>
      {/* space-y-[calc(6/16*1em)] */}
      <Link className="space-y-2 pb-w4 lg:w-5/6" href="/">
        <Text as="h1" balance intent="title">
          {heading}
        </Text>
        <Text dim>
          <SiteTime />
        </Text>
      </Link>

      <ContactIcons className="hidden md:flex" showLabel />
      <ContactIcons className="md:hidden" />
    </>
  );
};
