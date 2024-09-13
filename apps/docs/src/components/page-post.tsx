// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { Link } from "@repo/ui/next-link";
import { useMDXComponent } from "next-contentlayer2/hooks";
// import NextImage from "next/image";
import { Prose } from "@repo/ui/prose";
// import { MediaWrapper } from "@repo/ui/media-wrapper";
import { getYear } from "@repo/ui/post-utils";
import { TitleHeader } from "@repo/ui/title-header";
import { components } from "@repo/ui/mdx-components";
import { allPosts, type Post } from "contentlayer/generated";
import { PageWrapper } from "./page-wrapper";
// import { PostMeta } from "@/components/post";

export const PagePost = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  // const longDate = format(parseISO(post?.date ?? ""), "LLLL d, yyyy");
  // const year = format(parseISO(post?.date ?? ""), "yyyy");
  // const tagsWithoutFeatured = post?.tags.filter((tag) => tag !== "featured");

  // const nextPost = allPosts.find((p) => p.slug === post.nextPostLink);
  // const { width, height } = splitAspect(
  //   nextPost?.assets?.[0]?.aspect ?? "1920-1080"
  // );

  const year = getYear(post.date);

  return (
    <PageWrapper
      showRootActive
      // footerChildren={
      //   <>
      //     {nextPost ? (
      //       <Link className="space-y-w8" href={nextPost.slug}>
      //         <h2 className="flex items-baseline gap-1.5 text-title font-medium">
      //           Next
      //           <ArrowRightIcon className="size-[0.9em] translate-y-[0.1em] transform" />
      //         </h2>
      //         {/* Double MediaWrapper to 0.75 the image */}
      //         {/* Override aspect! This is better than adding more types! */}
      //         {/* 810 = 1080 * 0.75 // TODO post.asset[0] is aspect-[1440/880]? */}
      //         <MediaWrapper
      //           aspect="1920-1080"
      //           className="!aspect-[1920/810] !rounded-b-none !border-b-0"
      //           theme="default"
      //         >
      //           {/* Override aspect! This is better than adding more types! */}
      //           <MediaWrapper
      //             aspect="1920-1080"
      //             className="!aspect-[1920/1080]"
      //             showBackground={false}
      //             showBorder={false}
      //             showRounded={false}
      //           >
      //             {nextPost.assets && nextPost.assets.length > 0 ? (
      //               <NextImage
      //                 alt={nextPost.assets[0].alt}
      //                 className="object-cover"
      //                 height={isNaN(height) ? 667 : height}
      //                 sizes="(min-width: 1000px) 960px, (min-width: 660px) 620px, 100vw"
      //                 src={
      //                   isVideoFile(nextPost.assets[0].src)
      //                     ? (nextPost.assets[0].poster ?? "")
      //                     : nextPost.assets[0].src
      //                 }
      //                 width={isNaN(width) ? 1080 : width}
      //               />
      //             ) : null}
      //           </MediaWrapper>
      //         </MediaWrapper>
      //       </Link>
      //     ) : null}
      //   </>
      // }
    >
      <TitleHeader subheading={year}>{post.title}</TitleHeader>
      <div className="container flex flex-col pb-w20">
        <Prose>
          <MDXContent components={components} />
          {/* <PostMeta post={post} /> */}
        </Prose>
      </div>
    </PageWrapper>
  );
};
