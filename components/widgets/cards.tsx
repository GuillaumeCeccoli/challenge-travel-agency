"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getNavLinks } from "../../api/datas";
import { Card, CardContent } from "../ui/card";

export default function Cards() {
  const { cards } = getNavLinks();
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = cards.length;

  function previous() {
    const first = currentIndex === 0;
    const newIndex = first ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function next() {
    const last = currentIndex === length - 1;
    const newIndex = last ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <article className="w-full flex flex-col items-center py-10 bg-gradient-to-b from-gray-300">
      <div className="w-full flex flex-row justify-around items-center mb-10">
        <h2 className="font-roboto text-2xl italic sm:text-3xl xl:text-5xl">
          Où irez-vous ?
        </h2>
        <div className="flex flex-row justify-between">
          <ChevronLeft
            size={40}
            className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            onClick={previous}
          />
          <ChevronRight
            size={40}
            className="cursor-pointer hover:text-gray-400 hover:transition-colors hover:duration-300"
            onClick={next}
          />
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:my-10 xl:w-3/5 mx-auto">
        <div className="flex flex-col self-start mx-8 gap-5 w-3/5 mb-10 md:mx-0">
          <h3 className="font-lemon text-xl sm:text-2xl xl:text-3xl">
            Destinations
          </h3>
          <p className="font-roboto text-sm w-full sm:text-base xl:text-lg xl:w-4/5">
            Plongez au coeur du monde viking avec nos guides expérimentés !{" "}
          </p>
          <div className=" hidden w-3/5 overflow-hidden rounded-xl custom-shadow lg:block lg:self-center lg:w-2/5 lg:mt-20 xl:w-1/3 xl:mt-10">
            <Image
              src="/imgs/femme-viking.jpg"
              alt="Une femme viking qui fait un feu de camp."
              width={300}
              height={300}
              className="object-cover w-full mx-auto"
            />
          </div>
        </div>
        <Card className="w-full lg:w-3/5 bg-transparent scale-on-hover">
          {cards.map((card, id) => {
            if (id === currentIndex) {
              return (
                <CardContent key={id} className="relative fade w-full">
                  <div className="relative bg-gradient-to-t from-black overflow-hidden rounded-xl custom-shadow ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="object-cover opacity-75 h-[450px] w-full"
                    />
                  </div>
                  <div className="absolute inset-1/2 flex flex-col items-center text-white text-xl">
                    <div className="bg-[#d6d6d6] bg-opacity-40 rounded-xl text-center p-4 hover:text-black hover:font-bold transition-colors duration-300">
                      <h2 className="font-lemon text-2xl">{card.title}</h2>
                      <Link
                        href={card.link}
                        className="font-roboto whitespace-nowrap "
                      >
                        Explorez !
                      </Link>
                    </div>
                  </div>
                </CardContent>
              );
            }
          })}
        </Card>
      </div>
    </article>
  );
}

