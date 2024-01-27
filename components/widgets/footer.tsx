import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-5 py-10 text-sm lg:flex-row lg:justify-around lg:items-start">
      <div className="flex flex-col items-center gap-1">
        <Image
          src="logo/viking.svg"
          alt="Un viking barbu bien dessiné"
          width={100}
          height={100}
        />
        <p className="font-lemon">Viking-Tour</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-lemon">Liens utiles</h2>
        <p>Destinations</p>
        <p>Support</p>
        <p>Conditions</p>
        <p>Utilisation des données</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-lemon">Informations</h2>
        <p>A propos de nous</p>
        <p>Evènements</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-lemon">Contact</h2>
        <p>Mail : contact@viking-tour.sc</p>
        <p>Téléphone : 0102030405</p>
      </div>
    </div>
  );
}

