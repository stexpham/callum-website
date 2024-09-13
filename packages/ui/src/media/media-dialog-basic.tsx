"use client";

import { cx } from "cva";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/dialog";
import type { MediaDialogProps } from "./media-dialog";

export const MediaDialogBasic = ({
  title,
  buttonNode,
  children,
  contentClassName,
}: MediaDialogProps) => {
  return (
    <Dialog>
      {/* These styles don't work when used within an overflow-hidden container. Making a ref of them as we want to style this default UI. "focus-visible:outline focus-visible:outline-2 focus-visible:outline-fill" */}
      <DialogTrigger className="w-full focus-visible:outline-none">
        {buttonNode}
      </DialogTrigger>
      <DialogContent
        aria-describedby={title}
        className={cx(
          "container max-w-hero-px",
          // sm-lg laptop sizes, keep using max-w so we can click outside to close the dialog
          // "[@media(max-height:800px)]:max-w-[740px]",
          // "[@media(max-width:960px)]:max-w-inset-full",
          contentClassName
        )}
        // radix gray5 = rgb(224 224 224) bg-[rgba(224,224,224,1)]
        overlayClassName="bg-background-active cursor-zoom-out"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {children}

        {/* In order to show ther close button outside of the video area, we'd need to refactor MediaWrapper which a nested div that takes a child. Let's leave for now and presume users know the how to close this dialog without any guidance… */}
        {/* <DialogClose
            className={cx(
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
      </DialogContent>
    </Dialog>
  );
};
