import Image from "next/image";
import React from "react";

const LImportanceDesAbeillesPourLeClimat = () => {
  return (
    <div className="picture-and-text picture-and-text-reverse picture-and-text-picture">
      <p>
        L&apos;apiculture est une activité bénéfique pour l&apos;environnement
        et pour l&apos;homme.
        <br />
        <br />
        En effet, les abeilles sont des pollinisatrices indispensables à la
        biodiversité et à la survie de nombreuses espèces végétales.
        <br />
        <br />
        En pratiquant une apiculture respectueuse de l&apos;environnement, on
        participe à la préservation de ces espèces et à la protection de la
        faune et de la flore.
      </p>

      <Image
        src="/Index/beekeper-draw.svg"
        alt="Un dessin d'un apiculteur avec des abeilles"
        width={282}
        height={162}
      />
    </div>
  );
};

export default LImportanceDesAbeillesPourLeClimat;
