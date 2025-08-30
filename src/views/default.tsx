import { usePortfolio } from "../data/items";
import { selectList, type Item } from "../data/items";
import GalleryCard from "../components/GalleryCard";

export default function Default() {
    // подписка только на выбранный skill
  const filter = usePortfolio((s) => s.filter);
  const itemsAccenture: Item[] = selectList('itemsAccenture', filter);
  const itemsBeforeAccenture: Item[] = selectList("itemsBeforeAccenture", filter);
  
  const workBlock = (period: Item[]) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
      {period.map((it) => (
        <GalleryCard key={it.title} item={it} />
      ))}
    </div>
  );
  return (
    <>
      <h2>Works since 2016</h2>
      {workBlock(itemsAccenture)}
      <br />
      <h2>Works up to 2016</h2>
      {workBlock(itemsBeforeAccenture)}
    </>
  );
}
