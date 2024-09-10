"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  VideoHTMLAttributes,
} from "react";
import { useDeviceDetect } from "src/utils";
import { VideoLoader, VideoPoster } from "./video-loader";
import {
  PlayIcon,
  SpeakerLoudIcon,
  SpeakerOffIcon,
} from "@radix-ui/react-icons";
import { AspectRatio } from "./media-aspect";
import { SVGProps } from "react";

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster: string;
  aspect: AspectRatio;
  allowSound?: boolean;
  // sizes?: string;
}

export const Video = ({ src, poster, aspect, allowSound }: VideoProps) => {
  const { isMobileViewport } = useDeviceDetect();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoStatus, setVideoStatus] = useState<
    "loading" | "ready" | "playing"
  >("loading");
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMetadataLoaded = async () => {
      await new Promise<void>((resolve) => {
        if (video.readyState > 0) {
          // console.log("Video metadata already loaded");
          resolve();
        } else {
          video.addEventListener(
            "loadedmetadata",
            () => {
              // console.log("Video metadata loaded");
              resolve();
            },
            {
              // The 'loadedmetadata' event listener doesn't need explicit cleanup in this case because we're using the { once: true } option when adding the event listener. This option automatically removes the listener after it fires once, preventing any potential memory leaks.
              once: true,
            },
          );
        }
      });
      setVideoStatus("ready");
      // console.log("Video status set to ready");
    };

    const handlePlay = () => {
      // console.log("Video started playing");
      setVideoStatus("playing");
    };

    handleMetadataLoaded();
    video.addEventListener("play", handlePlay);
    // console.log("Play event listener added");

    return () => {
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  // useEffect(() => {
  //   console.log("Video status:", videoStatus);
  // }, [videoStatus]);

  return (
    <>
      {/* DO NOT render conditionally. If you do, event listeners and refs cannot attach. */}
      <video
        ref={videoRef}
        playsInline
        loop
        // autoPlay={!isMobileViewport}
        autoPlay
        muted={!isMobileViewport && !sound}
        style={{ display: videoStatus === "loading" ? "none" : "block" }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* SOUND (Desktop) */}
      {allowSound && (
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setSound(!sound)}
            className="bg-fill p-2 text-canvas"
            aria-label={sound ? "Mute" : "Unmute"}
          >
            {sound ? <SpeakerLoudIcon /> : <SpeakerOffIcon />}
          </button>
        </div>
      )}

      {/* PLAY (Mobile) */}
      {/* {isMobileViewport && videoStatus !== "playing" && poster && (
        <MobilePlayButton
          onClick={() => videoRef.current?.play()}
          poster={poster}
          aspect={aspect}
        />
      )} */}

      {/* LOADING */}
      {/* !isMobileViewport? */}
      {videoStatus === "loading" && poster && (
        <VideoLoader poster={poster} aspect={aspect} />
      )}
      {/* <VideoLoader poster={poster} aspect={aspect} /> */}
    </>
  );
};

const MobilePlayButton = ({
  onClick,
  poster,
  aspect,
}: {
  onClick: () => void;
  poster: string;
  aspect: AspectRatio;
}) => {
  return (
    <button className="absolute inset-0" onClick={onClick}>
      <VideoPoster poster={poster} aspect={aspect} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center rounded-full border-2 border-fill bg-[rgba(255,255,255,0.7)] p-2 text-fill">
          <CarbonPlayFilledAlt className="size-7 translate-x-[0.1em] transform" />
        </div>
      </div>
    </button>
  );
};

export function CarbonPlayFilledAlt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
      ></path>
    </svg>
  );
}
