import { create } from "zustand";

export type Item = {
  title: string;
  description: string;
  image: string;
  year: number;
  href?: string;
};

export type Filter =
  | "all"
  | "React"
  | "Vue.js"
  | "NextJS"
  | "TS"
  | "Redux"
  | "Mobx"
  | "jQuery"
  | "Angular"
  | "Joomla";

type PortfolioState = { filters: Set<Filter>; toggleFilter: (f: Filter) => void, clearFilters: () => void };

const ALL_WORKS: Record<"itemsAccenture" | "itemsBeforeAccenture", Item[]> = {
  itemsAccenture: [
    {
      title: "Actenture ESG LLM",
      description: "React/NextJS, Redux, Tailwind, CI/CD",
      image: "accenture-esg-llm.png ",
      year: 2024,
    },
    {
      title: "The Rich North Sea",
      description: "Vue.js",
      image: "the-rich-north-sea.png",
      year: 2023,
      href: "https://toolbox.therichnorthsea.com/",
    },
    {
      title: "BMW Classics",
      description: "React, TS, jsp",
      image: "bmw-archive.png",
      year: 2022,
      href: "https://www.bmwgroup-classic.com/",
    },
    {
      title: "Carlsberg Group",
      description: "React, NextJS, TS",
      image: "carlsberg.png",
      year: 2021,
      href: "https://www.carlsberggroup.com/",
    },
    {
      title: "Swisscom",
      description: "Angular, TS, microservices, monorepo",
      image: "swisscom.png",
      year: 2020,
      href: "https://www.swisscom.ch/",
    },
    {
      title: "Vodafone",
      description: "React, Mobx, TS",
      image: "vodafone.png",
      year: 2019,
      href: "https://www.vodafone.com/",
    },
    {
      title: "Credit Suisse",
      description: "React, Mobx / Mobx State Tree, TS",
      image: "credit-suisse.png",
      year: 2018,
      href: "https://web.archive.org/web/20171115113126/https://www.credit-suisse.com/us/en.html",
    },
    {
      title: "Elkjop",
      description: "Intershop, jQuery",
      image: "elkjop.png",
      year: 2018,
      href: "https://www.elkjop.no/",
    },
    {
      title: "Zoran — Internal Site",
      description: "Preact, HTML5",
      image: "zoran.jpg",
      year: 2017,
    },
    {
      title: "Volvo Cars",
      description: "JavaScript, jQuery",
      image: "volvogroup.png",
      year: 2017,
      href: "https://www.volvogroup.com/en/about-us/heritage/story-of-volvo.html",
    },
    {
      title: "VHI",
      description: "JavaScript, jQuery, Jade, Jenkins",
      image: "vhi.png",
      year: 2016,
      href: "https://www.vhi.ie/",
    },
  ],
  itemsBeforeAccenture: [
    {
      title: "MarketBridge",
      description: "AngularJS, jQuery, Jenkins",
      image: "marketbridge-old.png",
      year: 2015,
      href: "https://marketbridge.com/",
    },
    {
      title: "Fast Messenger",
      description: "jQuery",
      image: "messenger.png",
      year: 2015,
    },
    {
      title: "Moscow Home",
      description: "Joomla, jQuery",
      image: "moscowhome.jpg",
      year: 2014,
      href: "https://moscowhome.pro/",
    },
    {
      title: "Visavi Salon",
      description: "Joomla, jQuery",
      image: "visavi-salon.spb.ru.jpg",
      year: 2014,
    },
    {
      title: "Dixion",
      description: "Joomla, jQuery",
      image: "dixion.jpg",
      year: 2013,
      href: "https://dixion.de/",
    },
    {
      title: "Антикварные сезоны",
      description: "Joomla, jQuery",
      image: "antiques-auction.png",
      year: 2012,
      href: "https://www.auction-ruseasons.ru/",
    },
    {
      title: "Адмирал Моторс",
      description: "Joomla, jQuery",
      year: 2012,
      image: "admiral-motors.png",
    },
  ]
};

export const usePortfolio = create<PortfolioState>((set) => ({
  filters: new Set<Filter>(),
  toggleFilter: (f) =>
    set((prev) => {
      const next = new Set(prev.filters); // копия старого Set
      next.has(f) ? next.delete(f) : next.add(f);
      return { filters: next }; // возвращаем новый Set
    }),
  clearFilters: () => set({ filters: new Set() }),
}));

export type ListKey = keyof typeof ALL_WORKS;

export function selectList(key: ListKey, filters: Set<Filter>): Item[] {
  if (!filters || filters.size === 0) return ALL_WORKS[key];

  return ALL_WORKS[key].filter((it) => {
    const desc = it.description ?? "";
    for (const f of filters) if (desc.includes(f)) return true;
    return false;
  });
}
