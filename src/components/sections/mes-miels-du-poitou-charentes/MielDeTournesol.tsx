import Image from "next/image";

const MielDeTournesol = () => {
  return (
    <div className="miels">
      <Image
        className="miels__photo"
        src="/MesMielsDuPoitouCharentes/miel-de-tournesol.jpg"
        alt="Une photo des pots de miel de tournesol"
        width={318}
        height={200}
      />
      <div className="miels__right">
        <p>
          C&apos;est le dernier miel de la saison. Il est composé en grande
          majorité de{" "}
          <strong>
            fleurs de tournesol, ainsi que de toutes les autres fleurs
            d&apos;été
          </strong>
          .
        </p>

        <div className="miels__right--infos">
          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/honey-sunflower-draw.svg"
              alt="Un dessin d'un pot de tournesol"
              width={27}
              height={42}
            />

            <p>
              <strong>Texture:</strong> Solide
            </p>
          </div>

          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/flower-sunflower-draw.svg"
              alt="Un dessin d'une fleur de colza"
              width={26}
              height={50}
            />

            <p>
              <strong>Goût:</strong> Doux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MielDeTournesol;
