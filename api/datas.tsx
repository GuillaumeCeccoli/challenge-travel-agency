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
    href: "/#destinations",
    title: "Destinations",
  },
  {
    id: "about",
    href: "/#about",
    title: "A propos",
  },
  {
    id: "gallery",
    href: "/#gallery",
    title: "Galerie",
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

export type Avis = {
  id: string;
  firstname: string;
  photo: string;
  comment: string;
  rate: number;
};

export const avis: Avis[] = [
  {
    id: "sarah",
    firstname: "Sarah",
    photo: "/photos/sarah.jpg",
    comment:
      "Nous n'avons pas été déçu de notre voyage avec Viking-Tour, un planning flexible et des guides fabuleux ! Je recommande !",
    rate: 5,
  },
  {
    id: "charles",
    firstname: "Charles",
    photo: "/photos/charles.jpg",
    comment:
      "Un voyage inoubliable, des paysages à couper le souffle ! Une organisation parfaite ! Rien à dire !",
    rate: 4,
  },
  {
    id: "lucie",
    firstname: "Lucie",
    photo: "/photos/lucie.jpg",
    comment:
      "Mon mari m'a fait la surprise pour mon anniversaire, c'était une expérience inoubliable ! Je recommande !",
    rate: 5,
  },
];

export function getNavLinks() {
  const links = navLinks as NavLinks[];
  const cards = cardsInfos as CardInfos[];
  const gallery = galleryImages as GalleryImages[];
  const avisTravellers = avis as Avis[];
  return { links, cards, gallery, avisTravellers };
}

