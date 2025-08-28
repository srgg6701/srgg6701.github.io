import { useMemo, useState } from "react";
import { items, type Item } from "./data/items";
import { GalleryCard } from "./components/GalleryCard";

export default function App() {
  const [q, setQ] = useState("");
  const tags = useMemo(
    () => Array.from(new Set(items.flatMap(i => i.tags ?? []))),
    []
  );
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = items.filter((it) => {
    const text = (it.title + " " + it.description).toLowerCase();
    const okQ = text.includes(q.toLowerCase());
    const okTag = activeTag ? it.tags?.includes(activeTag) : true;
    return okQ && okTag;
  });

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold">Сергей Клевцов — Портфолио</h1>
            <p className="text-sm text-zinc-600">React / Vite / Tailwind</p>
          </div>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Поиск по проектам…"
              className="w-56 sm:w-72 rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-800"
            />
          </div>
        </div>
        {tags.length > 0 && (
          <div className="mx-auto max-w-6xl px-4 pb-3 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                activeTag === null
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "border-zinc-300 hover:border-zinc-900"
              }`}
            >
              Все
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t === activeTag ? null : t)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  activeTag === t
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "border-zinc-300 hover:border-zinc-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {filtered.length === 0 ? (
          <p className="text-zinc-600">Ничего не нашлось. Попробуй изменить запрос.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((it) => (
              <GalleryCard key={it.id} item={it} />
            ))}
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600">
        © {new Date().getFullYear()} Сергей Клевцов. Развёрнуто на Vercel.
      </footer>
    </div>
  );
}
