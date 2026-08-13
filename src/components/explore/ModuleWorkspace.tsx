"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  UploadSimple,
  Spinner,
  Download,
  ArrowClockwise,
} from "@phosphor-icons/react/dist/ssr";
import type { Module } from "@/lib/data";

type Stage = "upload" | "configure" | "processing" | "result";

export default function ModuleWorkspace({ module }: { module: Module }) {
  const [stage, setStage] = useState<Stage>("upload");
  const [fileName, setFileName] = useState<string | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setStage("configure");
    }
  }

  function handleRun() {
    setStage("processing");
    setTimeout(() => setStage("result"), 2200);
  }

  function handleReset() {
    setStage("upload");
    setFileName(null);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/explore"
        className="mb-8 flex w-fit items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text)]"
      >
        <ArrowLeft size={16} />
        Back to Explore
      </Link>

      <h1 className="font-display text-3xl">{module.name}</h1>
      <p className="mt-2 text-[var(--text-muted)]">{module.description}</p>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
        {stage === "upload" && (
          <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[var(--border)] py-16 text-center transition-colors duration-150 hover:border-[var(--text-muted)]">
            <UploadSimple size={32} className="text-[var(--text-muted)]" />
            <span className="text-sm text-[var(--text-muted)]">
              Click to upload your piece
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </label>
        )}

        {stage === "configure" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-3 text-sm">
              <span className="text-[var(--text-muted)]">Uploaded:</span>
              {fileName}
            </div>

            <div>
              <label className="text-sm text-[var(--text-muted)]">
                Style intensity
              </label>
              <input
                type="range"
                className="mt-2 w-full accent-[var(--accent)]"
                defaultValue={50}
              />
            </div>

            <button
              onClick={handleRun}
              className="w-fit rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95"
            >
              Run {module.name}
            </button>
          </div>
        )}

        {stage === "processing" && (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <Spinner size={32} className="animate-spin text-[var(--accent)]" />
            <p className="text-sm text-[var(--text-muted)]">
              Processing with {module.name}...
            </p>
          </div>
        )}

        {stage === "result" && (
          <div className="flex flex-col items-center gap-5">
            <div className="aspect-video w-full rounded-xl border border-[var(--border)] bg-[var(--bg)]" />
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95">
                <Download size={16} />
                Save to project
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-4 py-2 text-sm transition-colors duration-150 hover:text-[var(--text)] active:scale-95"
              >
                <ArrowClockwise size={16} />
                Try another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}