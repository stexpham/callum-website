// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // We're not transpiling, but consuming from the ui/src directly
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
