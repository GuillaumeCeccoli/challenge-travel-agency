import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getNavLinks } from "../../api/datas";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavBar() {
  const { links } = getNavLinks();
  return (
    <nav className="relative flex flex-row items-center justify-around bg-gray-100 bg-opacity-30 w-full">
      <div className="flex flex-row items-center justify-between w-60 sm:w-52 md:w-40">
        <Image
          src="/logo/viking.svg"
          alt="Le dessin d'un viking barbu avec un casque à cornes."
          width={60}
          height={60}
        />
        <span className="text-base font-lemon whitespace-nowrap">
          Viking-Tour
        </span>
      </div>
      <div className="md:hidden flex flex-row justify-end items-center w-full">
        <Sheet>
          <SheetTrigger className="m-2">
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-5">
            {links.map((link, id) => (
              <Link
                href={link.href}
                key={id}
                className="flex flex-row items-center justify-between w-40 mx-4"
              >
                {link.title}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-around md:w-3/5 xl:w-2/5">
        {links.map((link, id) => (
          <Link
            key={id}
            href={link.href}
            className="hover:text-gray-400 underline-from-center relative flex flex-row items-center justify-between"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

