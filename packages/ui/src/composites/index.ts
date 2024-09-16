/* 
  Composites are complex components built from elements.
  Composites are assembled into complex systems such as interactions.

  Rule of least permission! 
  1. Only export what is needed for the apps/web directory
  2. Do not export if it's only used within this directory 
 */

export {
  SnapCarousel,
  SnapCarouselItem,
  snapCarouselStyles,
  useCarouselClasses,
  type SnapCarouselItemProps,
} from "./snap-carousel";
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog";

// Compound composites?
export { DialogBasic, type DialogBasicProps } from "./dialog-basic";
export {
  MediaDialogImage,
  type MediaDialogImageProps,
} from "./media-dialog-image";
export {
  MediaDialogVideo,
  type MediaDialogVideoProps,
} from "./media-dialog-video";
