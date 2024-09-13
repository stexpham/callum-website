import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "@repo/ui/next-link";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import { Prose } from "@repo/ui/prose";
import { TitleHeader } from "@repo/ui/title-header";
import { allPosts, type Post } from "contentlayer/generated";
import { components } from "@/components/mdx";
import { MediaWrapper } from "@/components/media";
import { PostMeta } from "@/components/post";
import {
  getYear,
  isVideoFile,
  notSupersetOrTopicPosts,
  splitAspect,
} from "@/utils";
import { PageWrapper } from "./page-wrapper";

export const PagePost = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  // const longDate = format(parseISO(post?.date ?? ""), "LLLL d, yyyy");
  // const year = format(parseISO(post?.date ?? ""), "yyyy");
  // const tagsWithoutFeatured = post?.tags.filter((tag) => tag !== "featured");

  const everyPost = notSupersetOrTopicPosts(allPosts);
  const nextPost = everyPost.find((p) => p.slug === post.nextPostLink);
  const { width, height } = splitAspect(
    nextPost?.assets?.[0]?.aspect ?? "1920-1080"
  );

  const year = getYear(post.date);
  const endYear = post.endDate ? getYear(post.endDate) : null;

  const renderActiveNav = () => {
    if (post.category === "projects") return "/work";
    if (post.category === "writing") return "/writing";
    return undefined;
  };

  return (
    <PageWrapper
      activeNav={renderActiveNav()}
      footerChildren={
        <>
          {nextPost ? (
            <Link className="space-y-w8" href={nextPost.slug}>
              <h2 className="flex items-baseline gap-1.5 text-title font-medium">
                Next
                <ArrowRightIcon className="size-[0.9em] translate-y-[0.1em] transform" />
              </h2>
              {/* Double MediaWrapper to 0.75 the image */}
              {/* Override aspect! This is better than adding more types! */}
              {/* 810 = 1080 * 0.75 // TODO post.asset[0] is aspect-[1440/880]? */}
              <MediaWrapper
                aspect="1920-1080"
                className="!aspect-[1920/810] !rounded-b-none !border-b-0"
                theme="default"
              >
                {/* Override aspect! This is better than adding more types! */}
                <MediaWrapper
                  aspect="1920-1080"
                  className="!aspect-[1920/1080]"
                  showBackground={false}
                  showBorder={false}
                  showRounded={false}
                >
                  {nextPost.assets && nextPost.assets.length > 0 ? (
                    <NextImage
                      alt={nextPost.assets[0].alt}
                      className="object-cover"
                      height={isNaN(height) ? 667 : height}
                      sizes="(min-width: 1000px) 960px, (min-width: 660px) 620px, 100vw"
                      src={
                        isVideoFile(nextPost.assets[0].src)
                          ? (nextPost.assets[0].poster ?? "")
                          : nextPost.assets[0].src
                      }
                      width={isNaN(width) ? 1080 : width}
                    />
                  ) : null}
                </MediaWrapper>
              </MediaWrapper>
            </Link>
          ) : null}
        </>
      }
    >
      <TitleHeader
        subheading={
          <>
            {year}
            {endYear ? (
              <>
                &ndash;
                {endYear}
              </>
            ) : null}
          </>
        }
      >
        {post.title}
      </TitleHeader>

      <div className="container flex flex-col pb-w20">
        <Prose>
          <MDXContent components={components} />
          <PostMeta post={post} />
        </Prose>
      </div>
    </PageWrapper>
  );
};
