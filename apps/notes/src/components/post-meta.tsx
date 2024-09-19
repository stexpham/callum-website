import { cx } from "cva";
import NextLink from "next/link";
import { Fragment } from "react";
import { Link } from "@repo/ui/atoms";
import { noteStyle } from "@repo/ui/mdx-components";
import { getYear } from "@repo/ui/utils";
import { type Post } from "contentlayer/generated";

export const PostMeta = ({ post }: { post: Post }) => {
  const categoryLink = `/archive?category=${post.category}`;
  const tagsWithoutFeatured = post.tags?.filter((tag) => tag !== "featured");

  const year = getYear(post.date);
  // const endYear = post.endDate ? getYear(post.endDate) : null;

  return (
    <div className={cx(noteStyle, "link-block-alt link-block-large")}>
      <span>
        Superset:{" "}
        <Link className="capitalize" href={categoryLink}>
          {post.category}
        </Link>
      </span>
      <br />
      {tagsWithoutFeatured?.length ? (
        <span>
          Topics:{" "}
          {tagsWithoutFeatured.map((tag, i) => (
            <Fragment key={tag}>
              <NextLink
                className="capitalize"
                href={`${categoryLink}?sort=topic#${tag}`}
              >
                {tag.replaceAll("-", " ")}
              </NextLink>
              {i !== tagsWithoutFeatured.length - 1 && ", "}
            </Fragment>
          ))}
        </span>
      ) : null}
      <br />
      <span>
        Year:{" "}
        <Link className="capitalize" href={`${categoryLink}?sort=year#${year}`}>
          {year}
        </Link>
      </span>
    </div>
  );
};
