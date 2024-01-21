export type NavLinks = {
  id: string;
  href: string;
  title: string;
};

export const navLinks: NavLinks[] = [
  {
    id: "home",
    href: "/",
    title: "Accueil",
  },
  {
    id: "destinations",
    href: "/",
    title: "Destinations",
  },
  {
    id: "about",
    href: "/",
    title: "A propos",
  },
  {
    id: "account",
    href: "/",
    title: "Mon compte",
  },
];

export type CardInfos = {
  id: string;
  title: string;
  link: string;
  image: string;
};

export const cardsInfos: CardInfos[] = [
  {
    id: "norway",
    title: "Norvège",
    link: "/",
    image: "/imgs/norvege.jpg",
  },
  {
    id: "sweden",
    title: "Suède",
    link: "/",
    image: "/imgs/sweden.jpg",
  },
  {
    id: "finland",
    title: "Finlande",
    link: "/",
    image: "/imgs/finland.jpg",
  },
  {
    id: "iceland",
    title: "Islande",
    link: "/",
    image: "/imgs/iceland.jpg",
  },
  {
    id: "denmark",
    title: "Danemark",
    link: "/",
    image: "/imgs/danemark.jpg",
  },
];

export function getNavLinks() {
  const links = navLinks as NavLinks[];
  const cards = cardsInfos as CardInfos[];
  return { links, cards };
}

