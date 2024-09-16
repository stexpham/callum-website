import { Video } from "@repo/ui/media";
import { isVideoFile, splitAspect } from "@repo/ui/utils";
import NextImage from "next/image";
import type { Asset } from "contentlayer/generated";

export interface CardImageProps {
  asset: Asset;
  sizes?: string;
  priority?: boolean;
  className: string;
}

export const CardImage = ({
  asset,
  sizes = "(min-width: 1000px) 1080px, 100vw",
  priority,
  className,
}: CardImageProps) => {
  // const isVideo = Boolean(isVideoFile(asset.src));
  const isVideo = isVideoFile(asset.src);

  // Card image aspects are always 16:10
  const aspect = "1600-1000";
  const { width, height } = splitAspect(aspect);

  // if (!asset) return null;

  return (
    <>
      {isVideo ? (
        <Video
          aspect={aspect}
          className={className}
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
          className={className}
          height={height}
          key={asset.src}
          priority={priority}
          sizes={sizes}
          src={asset.src}
          style={{
            aspectRatio: aspect.replace("-", " / "),
          }}
          width={width}
        />
      )}
    </>
  );
};
