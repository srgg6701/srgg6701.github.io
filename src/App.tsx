import { itemsAccenture, itemsBeforeAccenture, type Item } from "./data/items";
import { GalleryCard } from "./components/GalleryCard";

const workBlock = (period: Item[]) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
    {period.map((it) => (
      <GalleryCard key={it.title} item={it} />
    ))}
  </div>
);

const ImgAbs = (
  src: string,
  width: number,
  right: number,
  top: number,
  index: number
) => {
  const iUrl = `/images/${src}`;
  return (
    <div
      key={`${index}-${top}`}
      className='absolute wrapper'
      style={{
        right: `${right}vw`,
        top: `${top}vh`,
      }}
      onClick={() => (location.href = iUrl)}
    >
      <img src={iUrl} width={width} />
    </div>
  );
};

export default function App() {
  return (
    <div className='min-h-dvh mx-auto px-4 max-w-6xl'>
      <header className='top-0 z-10 bg-white/70 pt-6 relative'>
        <h1 className='flex gap-8 items-center'>
          <div className='text-right'>
            Portfolio of Sergei Klevtsov
            <br />
            <span className='txtBorderColor'>&lt;Part of Experience /&gt;</span>
          </div>
          <img
            onClick={() => {
              location.href = "/images/la-sagrada-familia.jpg";
            }}
            src='/images/la-sagrada-familia.jpg'
            width={200}
            alt='La Sagrada Familia'
            title='La Sagrada Familia'
            className='inline-block relative align-middle my-4 z-[1] imgOver'
          />
          {[
            /* { src: "zero-ground.png", zindex: -1, width: 200, right: 31, top: 10 }, */
            {
              src: "i-am-sorry.jpg",
              width: 210,
              right: 24,
              top: 11,
            },
            {
              src: "pluto-rabbit.jpg",
              width: 248,
              right: 14.8,
              top: 4,
            },
            { src: "philo.jpg", zindex: -1, width: 200, right: 6.6, top: 13 },
            {
              src: "bus-vilnius.jpg",
              width: 89,
              right: 11.4,
              top: 5,
            },
          ].map((item, index) =>
            ImgAbs(item.src, item.width, item.right, item.top, index)
          )}
        </h1>
      </header>
      <main>
        <h2>Works since 2016</h2>
        {workBlock(itemsAccenture)}
        <br />
        <h2>Works up to 2016</h2>
        {workBlock(itemsBeforeAccenture)}
      </main>
      <footer className='mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600'>
        © {new Date().getFullYear()} Sergey Cleftsow aka <a href="https://t.me/srgg6701" target="_blank"><strong>srgg6701</strong></a>. Powered by
        Vercel.
      </footer>
    </div>
  );
}
