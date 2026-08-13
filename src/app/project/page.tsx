"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, FolderSimple, X } from "@phosphor-icons/react/dist/ssr";
import { getUser, type User } from "@/lib/auth";
import { useToast } from "@/components/ui/ToastProvider";

type UploadedImage = { id: string; src: string; name: string };

export default function Project() {
  const router = useRouter();
  const { showToast } = useToast();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [images, setImages] = useState<UploadedImage[]>([]);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.push("/login");
    } else {
      setUser(u);
    }
  }, [router]);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), src: reader.result as string, name: file.name },
        ]);
      };
      reader.readAsDataURL(file);
    });

    showToast("success", `${files.length} image${files.length > 1 ? "s" : ""} uploaded.`);
  }

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  if (user === undefined) {
    return <div className="mx-auto max-w-6xl px-6 py-20 text-[var(--text-muted)]">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl">Your projects</h1>
          <p className="mt-2 text-[var(--text-muted)]">
            {user?.name}, on the <span className="capitalize">{user?.tier.replace("-", " ")}</span> plan.
          </p>
        </div>

        <label className="flex cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[#14121A] transition-transform duration-100 active:scale-95">
          <Plus size={16} weight="bold" />
          Upload
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[var(--border)] py-24 text-center">
          <FolderSimple size={40} className="text-[var(--text-muted)]" />
          <div>
            <h3 className="font-display text-lg">No projects yet</h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Upload your first piece to get started.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <img src={img.src} alt={img.name} className="h-full w-full object-cover" />
              <button
                onClick={() => removeImage(img.id)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}