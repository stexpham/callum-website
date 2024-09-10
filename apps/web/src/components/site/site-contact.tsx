"use client";

import { cx } from "cva";
import { usePathname } from "next/navigation";
import { textVariants } from "@repo/ui/text";
import config from "@/config";

export const SiteContact = () => {
  const pathname = usePathname();

  return (
    // OVERFLOW STYLES: mobile:mx-[-15px] overflow-x-auto
    <div className="hide-scrollbar flex flex-col gap-w4 text-solid sm:flex-row">
      {pathname === "/" && (
        <h2
          className={cx(
            "Text-subheading mobile:hidden",
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fuck you!
            pathname === "/" && "text-fill"
          )}
        >
          Connect
        </h2>
      )}

      {/* mobile:pl-[15px] */}
      <ul className="link-block-alt link-block-large flex items-stretch gap-3 md:gap-4">
        <li className={cx(textVariants({ intent: "metaHeading" }))}>
          <a href={`mailto:${config.EMAIL}`}>Email</a>
        </li>
        {/* <hr className="hr hr-vertical h-[20px]" /> */}
        <li className={cx(textVariants)}>
          <a href={config.GITHUB_URL} rel="noopener noreferrer" target="_blank">
            Github
          </a>
        </li>
        <li className={cx(textVariants({ intent: "metaHeading" }))}>
          <a
            href={config.TWITTER_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li className={cx(textVariants({ intent: "metaHeading" }))}>
          <a
            href={config.LINKEDIN_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li
          className={cx(
            cx(textVariants({ intent: "metaHeading" })),
            "mobile:pr-w24"
          )}
        >
          <a
            href={config.SUBSTACK_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Substack
          </a>
        </li>
      </ul>
    </div>
  );
};
