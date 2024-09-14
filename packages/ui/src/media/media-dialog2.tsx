"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/composites";
import type { MediaFigureProps } from "./media-figure2";
import { MediaFigure } from "./media-figure2";

export type MediaDialogProps = Omit<MediaFigureProps, "wrapperProps"> & {
  title: string;
  buttonNode: React.ReactNode;
  aspectRatioStyle?: string;
  isPortrait?: boolean;
  children: React.ReactNode;
};

export const MediaDialog = ({
  title,
  buttonNode,
  aspectRatioStyle,
  isPortrait,
  children,
  caption,
}: MediaDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full focus-visible:outline-none">
        <MediaFigure figureIntent="inDialogTrigger">{buttonNode}</MediaFigure>
      </DialogTrigger>
      <DialogContent
        aria-describedby={title}
        className="container"
        // radix gray5 = rgb(224 224 224) bg-[rgba(224,224,224,1)]
        overlayClassName="bg-background-active cursor-zoom-out"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <MediaFigure
          background
          border={false}
          caption={caption}
          intent="superOutset"
          rounded
          wrapperProps={{
            aspectRatioStyle,
            isPortrait,
          }}
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
