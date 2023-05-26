import Image from "next/image";

const QuiSuisJe = () => {
  return (
    <div className="picture-and-text picture-and-text-picture">
      <Image
        src="/Index/beekeper-picture.svg"
        alt="Une photo de moi au rucher"
        width={361}
        height={270}
      />

      <p>
        Je m&apos;appelle <strong>Rudy</strong> et je suis l&apos;
        <strong>apiculteur passionné</strong> derrière MielsDupuis.
        <br />
        <br />
        Je produis du <strong>miel artisanal</strong> depuis plusieurs années.{" "}
        Mes abeilles butinent{" "}
        <strong>les fleurs de la région Poitou-Charentes</strong> pour produire
        un <strong>miel unique, aux saveurs subtiles et variées</strong>.
        <br />
        <br />
        Je suis heureux de pouvoir partager ma passion avec vous et de vous
        proposer des{" "}
        <strong>produits de qualité, issus du travail de mes abeilles</strong>.
      </p>
    </div>
  );
};

export default QuiSuisJe;
