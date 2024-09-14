/* 
  Rule of least permission! 
  1. Only export what is needed for the apps/web directory
  2. Do not export if it's only used within this directory 
 */

export type {
  MediaTheme,
  MediaFigureProps,
  MediaWrapperProps,
} from "./media-types";
export {
  MediaWrapper,
  MediaFigure,
  mediaWrapperStyle,
  figureStyle,
} from "./media-wrapper";
export { type AspectRatio, mediaAspect } from "./media-aspect";
export { Video, type VideoProps } from "./video";
export { MediaDialog, type MediaDialogProps } from "./media-dialog";
export { MediaDialogBasic } from "./media-dialog-basic";
