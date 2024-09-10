import { SiteContactShort } from "./SiteContactShort";
import { SiteTime } from "./SiteTime";

export const SiteFooter = () => {
  return (
    <div className="w-full space-y-3 pb-w48 pt-w24 text-solid">
      <hr className="hr" />
      <div className="flex  justify-between gap-0.5 text-meta mobile:flex-col">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2.5 ">
          {/* <span>© 2015 &ndash; 2022. All wrongs righted.</span> */}
          <span>
            <span className="sm:hidden">Callum Flack</span> © 2000 &ndash; 2023
          </span>

          <hr className="hr-vertical hidden h-[15px] sm:block" />
          <SiteTime />

          {/* <hr className="hr hr-vertical h-[15px] hidden sm:block" />
            <a
            href={`${config.GITHUB_URL}/commits/main`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-alt"
            >
              Last updated {format(parseISO(LAST_UPDATED), "d LLLL, yyyy")}
            </a> */}
        </div>
        <SiteContactShort />
      </div>
    </div>
  );
};
