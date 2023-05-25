import Image from "next/image";

const QuiSuisJe = () => {
  return (
    <div className="qui-suis-je">
      <Image
        src="/Index/beekeper-picture.svg"
        alt="Une photo de moi au rucher"
        width={361}
        height={270}
      />

      <p>
        Je m&apos;appelle Rudy et je suis l&apos;apiculteur passionné derrière
        MielsDupuis.
        <br />
        <br />
        Je produis du miel artisanal depuis plusieurs années. Mes abeilles
        butinent les fleurs de la région pour produire un miel unique, aux
        saveurs subtiles et variées.
        <br />
        <br />
        Je suis heureux de pouvoir partager ma passion avec vous et de vous
        proposer des produits de qualité, issus du travail de mes abeilles.
      </p>
    </div>
  );
};

export default QuiSuisJe;
