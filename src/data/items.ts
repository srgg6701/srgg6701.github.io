export type Item = {
  id: string;
  title: string;
  description: string;
  image: string;    // путь из /public, напр. "/images/shot-1.jpg"
  href?: string;    // ссылка на деплой/репо/кейс
  tags?: string[];
  badge?: string;
};

export const items: Item[] = [
  {
    id: "1",
    title: "Landing для финтех-стартапа",
    description: "Next/Vite, Tailwind, анимации, адаптив, Lighthouse 95+.",
    image: "/images/shot-1.jpg",
    href: "https://example.com",
    tags: ["Landing", "Tailwind", "UI"],
    badge: "Featured"
  },
  {
    id: "2",
    title: "Дашборд аналитики",
    description: "Реал-тайм виджеты, WebSocket, кастомные графики.",
    image: "/images/shot-2.jpg",
    href: "https://example.com",
    tags: ["Dashboard", "Realtime"]
  },
  {
    id: "3",
    title: "Компонентная библиотека",
    description: "Набор UI-компонентов, строгий TS, тесты.",
    image: "/images/shot-3.jpg",
    href: "https://example.com",
    tags: ["Design System", "TS"]
  }
];
