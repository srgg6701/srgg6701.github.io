import type { Item } from "../data/items";

export function GalleryCard({ item }: { item: Item }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <a href={item.href} target="_blank" rel="noreferrer" className="block">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-48 w-full object-cover md:h-56"
          />
          {item.badge && (
            <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2 py-1 text-xs text-white">
              {item.badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold leading-tight line-clamp-2">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
            {item.description}
          </p>
          {item.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </a>
    </article>
  );
}
