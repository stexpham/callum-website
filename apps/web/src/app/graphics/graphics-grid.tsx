import Image from "next/image";
import { useMemo } from "react";
import { MediaDialog } from "@repo/ui/media-dialog2";
import { Link, Text } from "@repo/ui/atoms";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cx } from "cva";
import { iconStyle, transformStyle } from "@/components/card/card-styles";
import type { Project } from "./projects";
import projects from "./projects";

function pack(images: Project[], columns: number): Project[][] {
  const packed: Project[][] = Array.from({ length: columns }, () => []);
  const heights = Array.from({ length: columns }, () => 0);
  for (const image of images) {
    const column = heights.indexOf(Math.min(...heights));
    packed[column].push(image);
    heights[column] += image.height;
  }
  return packed;
}

export const GraphicsGrid = () => {
  const columns = useMemo(() => pack(projects, 3), []);

  return (
    <div className="flex gap-2">
      {columns.map((column) => (
        <div className="basis-1/3 flex flex-col gap-2" key={column[0].image}>
          {column.map((project) => (
            <MediaDialog
              aspectRatioStyle={`${project.width}/${project.height}`}
              background={false}
              buttonNode={
                <Image
                  alt={project.title}
                  height={project.height}
                  src={project.image}
                  style={{
                    aspectRatio: `${project.width}/${project.height}`,
                  }}
                  width={project.width}
                />
              }
              caption={
                <div className="space-y-2">
                  <Text
                    as="h2"
                    className="group-hover:text-accent"
                    weight="medium"
                  >
                    {project.title}
                  </Text>
                  <Text className="pt-1" dim intent="meta">
                    {project.title}{" "}
                    {project.caseStudyLink ? (
                      <Link
                        className="group block"
                        href={project.caseStudyLink}
                      >
                        <span className="link inline-flex items-center gap-0.5 text-solid group-hover:text-solid group-hover:decoration-solid">
                          Read case study
                          <ArrowRightIcon
                            className={cx(iconStyle, transformStyle)}
                          />
                        </span>
                      </Link>
                    ) : null}
                  </Text>
                </div>
              }
              isPortrait={project.height > project.width}
              key={project.image}
              mediaFigureClassName="!py-0"
              showHoverCursor
              title={project.title}
            >
              <Image
                alt={project.title}
                // className="w-full rounded-xl"
                height={project.height}
                src={project.image}
                style={{
                  aspectRatio: `${project.width}/${project.height}`,
                }}
                width={project.width}
              />
            </MediaDialog>
          ))}
        </div>
      ))}
    </div>
  );
};
