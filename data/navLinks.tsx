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

export function getNavLinks() {
  return navLinks;
}

