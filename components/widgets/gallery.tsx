import { getNavLinks } from "@/api/datas";
import Image from "next/image";

export default function Gallery() {
  const { gallery } = getNavLinks();
  return (
    <article className="w-full flex flex-col items-center md:flex-row md:justify-around md:flex-wrap lg:mx-auto">
      {gallery.map((image, id) => (
        <Image
          key={id}
          src={image.image}
          alt={image.informations}
          title={image.informations}
          width={640}
          height={480}
          className="rounded-lg custom-shadow w-4/5 md:w-2/5 lg:w-1/5 scale-on-hover m-6"
        />
      ))}
    </article>
  );
}

