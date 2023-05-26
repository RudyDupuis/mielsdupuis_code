import Button from "@/components/Button";
import Image from "next/image";

const AchatEnGros = () => {
  return (
    <div className="achat-en-gros">
      <p>
        Si vous êtes intéressé par l&apos;
        <strong>achat de grandes quantités de miel</strong>, je propose des{" "}
        <strong>tarifs préférentiels</strong> pour les commandes en gros. Que
        vous soyez une entreprise, une coopérative ou une organisation, je peux
        répondre à vos besoins en fournissant des quantités importantes.
        <br />
        <br />
        Mon miel est disponible en pots de différentes tailles{" "}
        <strong>( 250g, 500g et 1kg)</strong>
        et peut être personnalisé avec votre propre étiquette si vous le
        souhaitez. Je peux également vous proposez des{" "}
        <strong>seaux de 10Kg, 40 Kg ou des fûts de 300kg</strong> (Selon mes
        stocks).
      </p>

      <div>
        <Image
          src="/OuAcheterMonMiel/barrel-draw.svg"
          alt="Une dessin d'un fût alimentaire"
          width={120}
          height={200}
        />
        <Button content="Me contacter" link="/me-contacter" type="primary" />
      </div>
    </div>
  );
};

export default AchatEnGros;
