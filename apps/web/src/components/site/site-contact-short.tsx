import config from "@/config";

export const SiteContactShort = () => {
  return (
    <ul className="link-block link-block-alt link-block-large flex items-stretch gap-3">
      <li>
        <a href={`mailto:${config.EMAIL}`}>Email</a>
      </li>
      {/* <hr className="hr hr-vertical h-[20px]" /> */}
      <li>
        <a href={config.TWITTER_URL} rel="noopener noreferrer" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href={config.GITHUB_URL} rel="noopener noreferrer" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a href={config.LINKEDIN_URL} rel="noopener noreferrer" target="_blank">
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
