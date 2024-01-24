"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { getNavLinks } from "../../api/datas";

export default function Avis() {
  const { avisTravellers } = getNavLinks();
  const [currentIndex, setCurrentIndex] = useState(0);
  const lengthArray = avisTravellers.length;

  function previous() {
    const first = currentIndex === 0;
    const newIndex = first ? lengthArray - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function next() {
    const last = currentIndex === lengthArray - 1;
    const newIndex = last ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <article className="flex flex-col gap-8 w-full sm:w-4/5 lg:w-3/5 xl:w-2/5">
      <div className="relative my-20">
        <div className="absolute flex flex-row items-center justify-between w-full top-1/2">
          <ChevronLeft
            size={50}
            onClick={previous}
            className="cursor-pointer hover:text-gray-400 transition-colors duration-500 ease-in-out"
          />
          <ChevronRight
            size={50}
            onClick={next}
            className="cursor-pointer hover:text-gray-400 transition-colors duration-500 ease-in-out"
          />
        </div>
        {avisTravellers.map((avis, id) => {
          if (id === currentIndex) {
            return (
              <div key={avis.id} className="flex flex-col items-center gap-5">
                <Image
                  src={avis.photo}
                  alt={`Une photo de ${avis.firstname}`}
                  width={150}
                  height={150}
                  className="rounded-xl shadow-xl object-cover"
                />
                <h3 className="font-lemon text-xl">{avis.firstname}</h3>
                <p className="font-roboto text-sm text-center w-4/5 sm:w-3/5 xl:text-base xl:w-2/5">
                  {avis.comment}
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                  {Array.from({ length: avis.rate }).map((_, index) => (
                    <Star key={index} size={25} className="text-green-900" />
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </article>
  );
}

