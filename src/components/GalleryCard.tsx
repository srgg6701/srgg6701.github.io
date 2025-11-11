import type { Item } from "../data/items";

export default function GalleryCard({ item }: { item: Item }) {
  return (
    <article className="group overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow artOver">
      <a href={item.href} target="_blank" rel="noreferrer" className="a-block">
        <div className="image-box relative h-48 w-full object-cover md:h-56" title={item.title} style={{ backgroundImage: `url(/images/${item.image})` }}>
        </div>
        <div className="title-box p-4">
          <h3 className="text-base font-semibold leading-tight line-clamp-2">
            {item.title} ({item.year})
          </h3>
          <p title={item.description} className="mt-2 text-sm text-zinc-600 whitespace-nowrap text-ellipsis line-clamp-3">
            {item.description}
          </p>
        </div>
      </a>
    </article>
  );
}
