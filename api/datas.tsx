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

export type GalleryImages = {
  id: string;
  image: string;
  informations: string;
};

export const galleryImages: GalleryImages[] = [
  {
    id: "bodo",
    image: "/imgs/bodo.jpg",
    informations: "Villa au bord d'un lac à Bodo au levé du jour.",
  },
  {
    id: "aurores",
    image: "/imgs/aurores.jpg",
    informations: "Des aurores boréales vues au nord de la Norvège.",
  },
  {
    id: "fagerland",
    image: "/imgs/fagerland.jpg",
    informations:
      "La forêt de Fagerland au levé du jour, sous une épaisse brume.",
  },
  {
    id: "moutons",
    image: "/imgs/moutons.jpg",
    informations: "Des moutons nous regardent passer sur une route de Suède.",
  },
  {
    id: "westfjords",
    image: "/imgs/icelandWhiteHouse.jpg",
    informations: "Une maison blanche dans les fjords de l'ouest en Islande.",
  },
  {
    id: "bergen",
    image: "/imgs/bergen-vue-du-port.jpg",
    informations: "Une photo de Bergen prise depuis la rade.",
  },
  {
    id: "finalnde",
    image: "/imgs/cathedrale-finlande.jpg",
    informations: "La cathédrale d'Helsinski en Finlande.",
  },
  {
    id: "danemark-plains",
    image: "/imgs/danemark-plains.jpg",
    informations: "Les plaines du Danemark au levé du jour.",
  },
];

export function getNavLinks() {
  const links = navLinks as NavLinks[];
  const cards = cardsInfos as CardInfos[];
  const gallery = galleryImages as GalleryImages[];
  return { links, cards, galleryImages };
}

