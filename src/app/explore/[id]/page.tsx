import { modules } from "@/lib/data";
import ModuleCard from "@/components/explore/ModuleCard";

export default function Explore() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-xl">
        <h1 className="font-display text-4xl">Explore modules</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Every module is a different way to transform your art. Pick one,
          upload a piece, and see it come to life.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}