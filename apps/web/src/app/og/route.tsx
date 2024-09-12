/* eslint-disable react/no-unknown-property -- ignore the tw prop */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Next.js Portfolio Starter";

  const fontData = await fetch(
    new URL(
      // "../../../packages/ui/src/fonts/neue-haas-unica-pro-medium.ttf",
      "./neue-haas-unica-pro-medium.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-design text-canvas">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "unica",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
