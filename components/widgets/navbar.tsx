import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Menu } from "lucide-react";
import { getNavLinks } from "../../data/navLinks";
import Link from "next/link";
``;
import Image from "next/image";

export default function NavBar() {
  const navLinks = getNavLinks();
  return (
    <nav className="relative flex flex-row justify-end items-center w-full">
      <div className="md:hidden flex flex-row-reverse justify-between items-center w-full">
        <Sheet>
          <SheetTrigger className="m-2">
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-5">
            {navLinks.map((links, id) => (
              <Link href={links.href} key={id}>
                {links.title}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
        <div className="flex flex-row items-center justify-between w-2/5">
          <Image
            src="/logo/viking.svg"
            alt="Le dessin d'un viking barbu avec un casque à cornes."
            width={60}
            height={60}
          />
          <span className="text-sms">Viking-Tour</span>
        </div>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-around md:w-3/5">
        {navLinks.map((link, id) => (
          <Link
            key={id}
            href={link.href}
            className="hover:text-gray-400 underline-from-center relative"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
