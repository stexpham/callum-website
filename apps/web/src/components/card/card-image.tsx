import NextImage from "next/image";
import { isVideoFile, splitAspect } from "@repo/ui/utils";
import type { AspectRatio } from "@repo/ui/media";
import { Video } from "@repo/ui/media";
import type { Asset } from "contentlayer/generated";

export interface CardImageProps {
  asset: Asset;
  sizes?: string;
  priority?: boolean;
}

export const CardImage = ({
  asset,
  sizes = "(min-width: 1000px) 1080px, 100vw",
  priority,
}: CardImageProps) => {
  // const isVideo = !!isVideoFile(asset.src);
  // const isVideo = Boolean(isVideoFile(asset.src));
  const isVideo = isVideoFile(asset.src);
  const { width, height } = splitAspect(asset.aspect);

  // if (!asset) return null;

  return (
    <>
      {isVideo ? (
        <Video
          aspect={asset.aspect as AspectRatio}
          key={asset.src}
          poster={asset.poster ?? "/images/VIDEO-POSTER-TODO.png"}
          src={asset.src}
        />
      ) : (
        <NextImage
          // alt={asset.alt ?? post.title}
          // alt={asset.alt ?? "Missing alt text"}
          // quality={50}
          alt={asset.alt}
          className="w-full object-cover"
          height={isNaN(height) ? 667 : height}
          key={asset.src}
          priority={priority}
          sizes={sizes}
          src={asset.src}
          width={isNaN(width) ? 1080 : width}
        />
      )}
    </>
  );
};
