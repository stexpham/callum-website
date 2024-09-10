import { type Post } from "contentlayer/generated";

export type CustomPost = Post & { isCustom?: boolean };

export const extraCard: CustomPost = {
  slug: "view-all-work",
  title: "View work archive",
  category: "projects",
  _id: "view-all-work",
  _raw: {
    sourceFilePath: "",
    sourceFileName: "",
    sourceFileDir: "",
    contentType: "markdown",
    flattenedPath: "",
  },
  type: "Post",
  date: "2000-01-01T00:00:00.000Z",
  endDate: new Date().toISOString(),
  body: { raw: "", code: "" },
  isCustom: true,
  lede: "",
  libraryType: "post",
  readingTime: { text: "", minutes: 0, time: 0, words: 0 },
};
