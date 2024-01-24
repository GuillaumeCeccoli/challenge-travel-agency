import { getNavLinks } from "@/api/datas";
import Image from "next/image";

export default function Gallery() {
  const { galleryImages } = getNavLinks();
  return (
    <article className="w-full flex flex-col items-center md:flex-row md:justify-around md:flex-wrap lg:mx-auto">
      {galleryImages.map((image, id) => (
        <Image
          key={id}
          src={image.image}
          alt={image.informations}
          title={image.informations}
          width={640}
          height={480}
          className="rounded-lg custom-shadow lg:w-1/5 scale-on-hover m-6"
        />
      ))}
    </article>
  );
}

