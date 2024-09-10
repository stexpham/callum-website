import NextImage from "next/image";
import { Spinner } from "@repo/ui/spinner";
import { splitAspect } from "@/utils";

interface VideoLoaderProps {
  poster: string;
  aspect: string;
}

export const VideoLoader = ({ poster, aspect }: VideoLoaderProps) => (
  <>
    <VideoPoster aspect={aspect} poster={poster} />
    <div className="VideoLoader absolute inset-0 flex items-center justify-center text-fill">
      <Spinner />
    </div>
  </>
);

export const VideoPoster = ({ poster, aspect }: VideoLoaderProps) => {
  const { width, height } = splitAspect(aspect);

  return (
    <NextImage
      alt="video poster"
      // NB!!! using w-full here means it does NOT fill the parent's max-w-*
      className="VideoPoster relative object-cover opacity-100"
      height={isNaN(height) ? 667 : height}
      priority
      quality={10}
      sizes="(min-width: 1000px) 960px, (min-width: 660px) 620px, 100vw"
      src={poster}
      width={isNaN(width) ? 1080 : width}
    />
  );
};
