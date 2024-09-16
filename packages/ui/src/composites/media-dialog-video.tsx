"use client";

import { cx, type VariantProps } from "cva";
import { splitAspect } from "../../lib/utils";
import type { VideoProps, MediaFigureProps } from "../media";
import { Video, MediaFigure, mediaWrapperVariants } from "../media";
import { DialogBasic, type DialogBasicProps } from "./dialog-basic";
import { DialogClose } from "./dialog";

export interface MediaDialogVideoProps
  extends Pick<DialogBasicProps, "title">,
    VariantProps<typeof mediaWrapperVariants>,
    Pick<MediaFigureProps, "caption">,
    VideoProps {
  aspect: string;
  title: string;
  caption?: MediaFigureProps["caption"];
}

export const MediaDialogVideo = ({
  allowSound,
  aspect,
  border,
  background,
  caption,
  poster,
  rounded,
  src,
  title = "Media Dialog Video",
}: MediaDialogVideoProps) => {
  const { width, height } = splitAspect(aspect);

  return (
    <DialogBasic
      buttonNode={
        <MediaFigure
          caption={caption}
          figureIntent="inMdxDialog"
          isPortrait={height > width}
        >
          <Video
            allowSound={allowSound}
            aspect={aspect}
            className={cx(
              mediaWrapperVariants({
                background,
                border,
                rounded,
              })
            )}
            poster={poster}
            src={src}
          />
        </MediaFigure>
      }
      title={title}
    >
      <MediaFigure
        caption={caption}
        figureIntent="superOutset"
        isPortrait={height > width}
      >
        <DialogClose className="cursor-zoom-out">
          <Video
            allowSound={allowSound}
            aspect={aspect}
            className={cx(
              mediaWrapperVariants({
                background,
                border,
                rounded,
              })
            )}
            poster={poster}
            src={src}
          />
        </DialogClose>
      </MediaFigure>
    </DialogBasic>
  );
};
