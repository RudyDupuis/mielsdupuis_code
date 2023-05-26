import Image from "next/image";

const MielDeColza = () => {
  return (
    <div className="miels">
      <Image
        className="miels__photo"
        src="/MesMielsDuPoitouCharentes/miel-de-colza.jpg"
        alt="Une photo des pots de miel de colza"
        width={318}
        height={200}
      />
      <div className="miels__right">
        <p>
          C&apos;est le premier miel de la saison. Il est composé en grande
          majorité de{" "}
          <strong>
            fleurs de colza, ainsi que de toutes les autres fleurs de printemps
          </strong>
          .
        </p>

        <div className="miels__right--infos">
          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/honey-colza-draw.svg"
              alt="Un dessin d'un pot de colza"
              width={27}
              height={42}
            />

            <p>
              <strong>Texture:</strong> Solide
            </p>
          </div>

          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/flower-colza-draw.svg"
              alt="Un dessin d'une fleur de colza"
              width={33}
              height={39}
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

export default MielDeColza;
