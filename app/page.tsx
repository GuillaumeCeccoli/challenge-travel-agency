import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/widgets/navbar";
import { ChevronsDownIcon } from "lucide-react";
import Cards from "../components/widgets/cards";

export default function Home() {
  return (
    <main className="h-screen font-roboto w-full">
      <header className="h-full">
        <NavBar />
        <Image
          src="/imgs/newback.jpg"
          alt="Une photo de la scandinanvie"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
        <article className="w-full flex flex-col items-center justify-end absolute bottom-0 gap-10 text-white md:right-0 md:flex-row md:justify-between">
          <Link href="/" className="underline text-sm m-10 xl:ml-32 xl:text-xl">
            Planifiez votre voyage
          </Link>
          <div className="w-full flex flex-row justify-around items-center bg-gradient-to-t from-black pb-20 md:pb-32 md:w-3/5 xl:w-1/2">
            <div className="flex flex-col items-center border-white border-2 rounded-full">
              <p className="whitespace-nowrap -rotate-90 my-20">
                En savoir plus
              </p>
              <ChevronsDownIcon size={40} className="animate-bounce" />
            </div>
            <h1 className="text-lg font-lemon w-2/5 sm:text-xl lg:text-2xl lg:pr-32 lg:w-3/5 xl:text-3xl">
              Des souvenirs inoubliables à portée de main.
            </h1>
          </div>
        </article>
      </header>
      <section>
        <Cards />
      </section>
    </main>
  );
}

