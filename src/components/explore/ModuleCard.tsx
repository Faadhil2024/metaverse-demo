import {
  Heart,
  Eye,
  Cube,
  Wind,
  CubeTransparent,
  Globe,
  PaintBrush,
  Waveform,
  Quotes,
  FrameCorners,
  ClockCounterClockwise,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

import type { Module } from "@/lib/data";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; weight?: string }>
> = {
  Motion: Wind,
  "3D": CubeTransparent,
  Metaverse: Globe,
  Style: PaintBrush,
  Abstract: Waveform,
  Narrative: Quotes,
  Exhibition: FrameCorners,
  Restoration: ClockCounterClockwise,
  Detail: MagnifyingGlass,
};

export default function ModuleCard({ module }: { module: Module }) {
  const Icon = iconMap[module.category] ?? Cube;

  return (
    <a
      href={module.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] p-4 transition-transform duration-150 hover:-translate-y-0.5"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-90`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

      {/* Category "skin" watermark */}
      <Icon
        size={180}
        className="absolute -bottom-8 -right-8 rotate-[-12deg] text-white/10"
      />

      {/* Author */}
      <div className="relative z-10 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[10px] font-medium text-black">
          {module.author.charAt(0)}
        </div>

        <span className="truncate text-xs font-medium text-white/90">
          {module.author}
        </span>
      </div>

      {/* Module information */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90">
          <Icon
            size={14}
            weight="fill"
            className="text-black"
          />
        </div>

        <h3 className="text-sm font-medium leading-tight text-white">
          {module.name}
        </h3>

        <div className="flex items-center gap-3 text-xs text-white/70">
          <span>{module.timeAgo}</span>

          <span className="flex items-center gap-1">
            <Heart size={12} />
            {module.likes}
          </span>

          <span className="flex items-center gap-1">
            <Eye size={12} />
            {module.views}
          </span>
        </div>
      </div>
    </a>
  );
}