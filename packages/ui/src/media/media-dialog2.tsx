"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/composites";
// import { MediaFigure } from "./media-figure";
import type { MediaFigureProps } from "./media-wrapper2";
import { MediaFigure } from "./media-wrapper2";
// import type { MediaWrapperProps } from "./media-types";

export type MediaDialogProps = MediaFigureProps & {
  title: string;
  buttonNode: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
};

export const MediaDialog = ({
  showBorder = true,
  showBackground = true,
  showRounded = true,
  title,
  theme,
  buttonNode,
  aspectRatioStyle,
  children,
  caption,
}: MediaDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full focus-visible:outline-none">
        <MediaFigure
          aspectRatioStyle={aspectRatioStyle}
          className=""
          mediaFigureClassName="!pt-w4 hover:cursor-zoom-in"
          showBackground={showBackground}
          showBorder={showBorder}
          showRounded={showRounded}
          theme={theme}
        >
          {buttonNode}
        </MediaFigure>
      </DialogTrigger>
      <DialogContent
        aria-describedby={title}
        className="container"
        // radix gray5 = rgb(224 224 224) bg-[rgba(224,224,224,1)]
        overlayClassName="bg-background-active cursor-zoom-out"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <MediaFigure
          aspectRatioStyle={aspectRatioStyle}
          caption={caption}
          showBackground
          showBorder={false}
          showRounded
          theme="superOutset"
        >
          {children}

          {/* In order to show ther close button outside of the video area, we'd need to refactor MediaWrapper which a nested div that takes a child. Let's leave for now and presume users know the how to close this dialog without any guidance… */}
          {/* <DialogClose
            className={clsx(
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
              "hover:opacity-100",
              "focus:ring-ring focus:outline-none focus:ring-2 focus:ring-offset-2",
              "disabled:pointer-events-none",
              "data-[state=open]:bg-accent data-[state=open]:text-solid",
            )}
          >
            <Cross2Icon className="size-em" />
            <span className="sr-only">Close</span>
          </DialogClose> */}
        </MediaFigure>
      </DialogContent>
    </Dialog>
  );
};
