import { Text } from "@repo/ui/atoms";

export const Available = () => (
  <div className="pt-[0.3em]">
    <div className="inline-flex rounded-button border border-accent bg-canvas px-3 pr-4 py-2 text-design">
      <div className="flex items-center gap-2">
        {/* animate-pulse2 h-[0.35em] w-[0.35em] */}
        <div className="h-[0.8em] w-[0.8em] translate-y-[-0.05em] transform animate-pulse rounded-full bg-design" />
        <Text
          className="translate-y-[-0.075em] transform"
          intent="meta"
          weight="medium"
        >
          Currently available for projects, teams, missions
        </Text>
      </div>
    </div>
  </div>
);
