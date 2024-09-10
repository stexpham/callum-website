import clsx from "clsx";
import { usePathname } from "next/navigation";
import config from "@/config";

// grid grid-cols-4 md:grid-cols-7 gap-w4 items-baseline
const LIST_STYLE = "Text-subheading";

export const SiteContact = () => {
  const pathname = usePathname();

  return (
    // OVERFLOW STYLES: mobile:mx-[-15px] overflow-x-auto
    <div className="hide-scrollbar flex flex-col gap-w4 text-solid sm:flex-row">
      {pathname === "/" && (
        <h2
          className={clsx(
            "Text-subheading mobile:hidden",
            // !pathname.includes("knowhow") && "text-fill"
            pathname === "/" && "text-fill",
          )}
        >
          Connect
        </h2>
      )}

      {/* mobile:pl-[15px] */}
      <ul className="link-block-alt link-block-large flex items-stretch gap-3 md:gap-4">
        <li className={LIST_STYLE}>
          <a href={`mailto:${config.EMAIL}`}>Email</a>
        </li>
        {/* <hr className="hr hr-vertical h-[20px]" /> */}
        <li className={LIST_STYLE}>
          <a target="_blank" rel="noopener noreferrer" href={config.GITHUB_URL}>
            Github
          </a>
        </li>
        <li className={LIST_STYLE}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={config.TWITTER_URL}
          >
            Twitter
          </a>
        </li>
        <li className={LIST_STYLE}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={config.LINKEDIN_URL}
          >
            Linkedin
          </a>
        </li>
        <li className={clsx(LIST_STYLE, "mobile:pr-w24")}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={config.SUBSTACK_URL}
          >
            Substack
          </a>
        </li>
      </ul>
    </div>
  );
};
