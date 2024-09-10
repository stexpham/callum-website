import { format, parseISO } from "date-fns";

export const getYear = (dateString: string) =>
  format(parseISO(dateString), "yyyy");

export const isVideoFile = (url: string) => url.toLowerCase().endsWith(".mp4");

export const splitAspect = (
  aspect: string | undefined
): { width: number; height: number } => {
  if (!aspect) return { width: 1080, height: 667 }; // Default values
  const [width, height] = aspect.split("-").map(Number);
  return { width, height };
};
