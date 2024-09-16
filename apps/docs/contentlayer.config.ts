import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";
import readingTime from "reading-time";
import smartypants from "remark-smartypants";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    draft: {
      type: "boolean",
    },
    title: {
      type: "string",
      required: true,
    },
    linkTitle: {
      type: "string",
      description:
        "Use this if you want to display a different link title. Helpful in the UI where it needs to be shorter.",
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category: {
      type: "enum",
      options: ["writing", "projects", "library", "home", "about", "content"],
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      // required: true,
    },
    assets: {
      type: "list", // despite what docs says, use list not nested!
      of: Asset,
      description:
        "The first asset is used as the thumbnail, which should always be aspect-[1440/880]",
    },
    nextPostLink: {
      type: "string",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("posts/", ""),
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw),
    },
    excerpt: {
      type: "string",
      // resolve: (post) => {
      //   const content = post.body.raw.trim();
      //   const excerptLength = 200; // Adjust this value as needed
      //   return (
      //     content.slice(0, excerptLength) +
      //     (content.length > excerptLength ? "..." : "")
      //   );
      // },
      resolve: (post) => {
        const content = post.body.raw.trim().replace(/\s+/g, " ");
        const excerpt =
          content.slice(0, 800) + (content.length > 800 ? "…" : "");
        return excerpt;
      },
      // resolve: (post) => {
      //   const content = post.body.raw.replace(/\s+/g, " ").trim();
      //   return content.slice(0, 200) + (content.length > 200 ? "..." : "");
      // },
    },
  },
}));

const Asset = defineNestedType(() => ({
  name: "Asset",
  fields: {
    src: {
      type: "string",
      required: true,
    },
    alt: {
      type: "string",
      required: true,
    },
    aspect: {
      type: "string",
      required: true,
      description:
        "MDX components cannot take arbitrary classes, so we must provide a key to look-up the media/video-aspect map function. The first assetis used as the thumbnail, so it should always have aspect-[1440/880]",
    },
    poster: {
      type: "string",
      description: "The poster image for the video. Therefore not required.",
    },
    border: {
      type: "boolean",
      default: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  contentDirExclude: ["_TEMPLATE.mdx"],
  documentTypes: [Post],
  mdx: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- fuck you
    remarkPlugins: [smartypants as any],
  },
});
