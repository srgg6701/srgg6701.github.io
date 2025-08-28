import { itemsAccenture, itemsBeforeAccenture, type Item } from "./data/items";
import { GalleryCard } from "./components/GalleryCard";

const workBlock = (period: Item[]) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
    {period.map((it) => (
      <GalleryCard key={it.title} item={it} />
    ))}
  </div>
);

export default function App() {
  return (
    <div className='min-h-dvh mx-auto px-4 max-w-6xl'>
      <header className='sticky top-0 z-10 bg-white/70 backdrop-blur pt-6'>
        <h1>Portfolio of Sergei Klevtsov (Part of Experience)</h1>
      </header>
      <main>
        <h2>Works since 2016</h2>
        {workBlock(itemsAccenture)}
        <br/>
        <h2>Works up to 2016</h2>
        {workBlock(itemsBeforeAccenture)}
      </main>
      <footer className='mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600'>
        © {new Date().getFullYear()} Сергей Клевцов. Развёрнуто на Vercel.
      </footer>
    </div>
  );
}
