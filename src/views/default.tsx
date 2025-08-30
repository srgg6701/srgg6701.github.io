import { usePortfolio } from "../data/items";
import { selectList, type Item, type Filter } from "../data/items";
import GalleryCard from "../components/GalleryCard";

export default function Default() {
    // подписка только на выбранный skill
  const filters:Set<Filter> = usePortfolio((s) => s.filters);
  const itemsAccenture: Item[] = selectList('itemsAccenture', filters);
  const itemsBeforeAccenture: Item[] = selectList("itemsBeforeAccenture", filters);
  
  const workBlock = (period: Item[]) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
      {period.map((it) => (
        <GalleryCard key={it.title} item={it} />
      ))}
    </div>
  );
  return (
    <>
      <h2>Works since 2016: <span className="font-normal">after involving in the corporate activity at Accenture</span></h2>
      {workBlock(itemsAccenture)}
      <br />
      <h2>Works up to 2016: <span className="font-normal">before involving in the corporate activity at Accenture</span></h2>
      {workBlock(itemsBeforeAccenture)}
    </>
  );
}
