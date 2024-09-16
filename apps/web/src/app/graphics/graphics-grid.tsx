import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link, Text } from "@repo/ui/atoms";
import { MediaDialogImage } from "@repo/ui/composites";
import { cx } from "cva";
import { useMemo } from "react";
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
      {columns.map((column, index) => (
        <div className="basis-1/3 flex flex-col gap-2" key={column[0].image}>
          {column.map((project) => (
            <MediaDialogImage
              alt={project.title}
              aspect={`${project.width}-${project.height}`}
              buttonFigureIntent="inGrid"
              caption={<Caption project={project} />}
              key={project.image}
              priority={index < 9}
              showCaptionInButton={false}
              src={project.image}
              title={project.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Caption = ({ project }: { project: Project }) => (
  <div className="space-y-2">
    <Text as="h2" className="group-hover:text-accent" weight="medium">
      {project.title}
    </Text>
    <Text className="pt-1" dim intent="meta">
      {project.title}{" "}
      {project.caseStudyLink ? (
        <Link className="group block" href={project.caseStudyLink}>
          <span className="link inline-flex items-center gap-0.5 text-solid group-hover:text-solid group-hover:decoration-solid">
            Read case study
            <ArrowRightIcon className={cx(iconStyle, transformStyle)} />
          </span>
        </Link>
      ) : null}
    </Text>
  </div>
);
