import { usePathname } from "next/navigation";
import config from "@/config";

export const SiteContactShort = () => {
  const pathname = usePathname();

  return (
    <ul className="link-block link-block-alt link-block-large flex items-stretch gap-3">
      <li>
        <a href={`mailto:${config.EMAIL}`}>Email</a>
      </li>
      {/* <hr className="hr hr-vertical h-[20px]" /> */}
      <li>
        <a target="_blank" rel="noopener noreferrer" href={config.TWITTER_URL}>
          Twitter
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={config.GITHUB_URL}>
          Github
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={config.LINKEDIN_URL}>
          Linkedin
        </a>
      </li>
      {/* <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={config.SUBSTACK_URL}
        >
          Substack
        </a>
      </li> */}
    </ul>
  );
};
