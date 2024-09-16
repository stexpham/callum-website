import { Video } from "@repo/ui/media";
import { isVideoFile, splitAspect } from "@repo/ui/utils";
import NextImage from "next/image";
import { cx } from "cva";
import type { Asset } from "contentlayer/generated";

export interface CardImageProps {
  asset: Asset;
  sizes?: string;
  priority?: boolean;
  className: string;
}

// NB! CardImage aspects must always be 16:10
export const CardImage = ({
  asset,
  sizes = "(min-width: 1000px) 1080px, 100vw",
  priority,
  className,
}: CardImageProps) => {
  // const isVideo = Boolean(isVideoFile(asset.src));
  const isVideo = isVideoFile(asset.src);

  // Set aspect to 16:10
  const aspect = "1600-1000";
  const { width, height } = splitAspect(aspect);

  return (
    <>
      {isVideo ? (
        <Video
          aspect={aspect}
          className={cx("CardImageVideo", className)}
          key={asset.src}
          poster={asset.poster ?? "/images/VIDEO-POSTER-TODO.png"}
          src={asset.src}
        />
      ) : (
        <NextImage
          // quality={50}
          alt={asset.alt}
          className={cx("CardImageImage", className)}
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
