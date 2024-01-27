import { Button } from "@/components/ui/button";
import Avis from "@/components/widgets/avis";
import Footer from "@/components/widgets/footer";
import Gallery from "@/components/widgets/gallery";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cards from "../components/widgets/cards";
import NavBar from "../components/widgets/navbar";

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
          <Link href="/" className="underline text-lg m-10 xl:ml-32 xl:text-xl">
            Planifiez votre voyage
          </Link>
          <div className="w-full flex flex-row justify-around items-center bg-gradient-to-t from-black pb-20 md:pb-32 md:w-3/5 xl:w-1/2">
            <div className="flex flex-col items-center">
              <p className="whitespace-nowrap -rotate-90 my-20 text-lg">
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
      <section className="py-16 flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-400">
        <article className="relative w-4/5 flex flex-col items-center gap-5 md:flex-row-reverse md:justify-around xl:w-3/5">
          <div className="self-start w-full pb-10 sm:w-4/5 md:w-3/5 md:p-6 xl:w-1/3">
            <h2 className="font-lemon text-xl">
              Explorez la Scandinavie en toute sérénité !
            </h2>
            <p className="py-5 lg:py-20">
              Notre vision du voyage est de faire en sorte que notre planning
              soit le plus flexible possible. Pour s&apos;adapter à vos envies,
              nous vous proposons des voyages sur mesure.
            </p>
            <Button className="bg-black text-white font-lemon hover:shadow-lg hover:text-gray-500">
              En savoir plus !
            </Button>
          </div>
          <Image
            src="/imgs/voyage.jpg"
            alt="Une famille qui boit un coup au bord d'un lac en pleine nature."
            width={640}
            height={480}
            className="rounded-xl custom-shadow sm:w-3/5 lg:w-1/4 scale-on-hover"
          />
        </article>
      </section>
      <section className="my-20 w-full">
        <h2 className="font-lemon text-center pb-10 w-4/5 mx-auto md:text-xl xl:text-2xl">
          Quelques photos prises par nos experts.
        </h2>
        <Gallery />
      </section>
      <section className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-400 py-10">
        <h2 className="font-lemon lg:text-2xl">
          Ils nous ont fait confiance !
        </h2>
        <Avis />
      </section>
      <Footer />
    </main>
  );
}

