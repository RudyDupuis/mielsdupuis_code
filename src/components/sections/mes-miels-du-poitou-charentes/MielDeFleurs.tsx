import Image from "next/image";

const MielDeFleurs = () => {
  return (
    <div className="miels miels-reverse">
      <div className="miels__right">
        <p>
          Récolté fin juin à partir de mes ruches situées en forêt, il est
          composé d&apos;une <strong>grande variété de fleurs sauvages</strong>{" "}
          butinées par mes abeilles, notamment{" "}
          <strong>le tilleul, le châtaignier et la ronce</strong>.
          <br /> <br />
          Chaque année, sa composition et son goût sont uniques, reflétant les
          conditions météorologiques et les fleurs qui ont été butinées.
        </p>

        <div className="miels__right--infos">
          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/honey-flowers-draw.svg"
              alt="Un dessin d'un pot de fleurs"
              width={27}
              height={42}
            />

            <p>
              <strong>Texture:</strong> Solide
            </p>
          </div>

          <div>
            <Image
              src="/MesMielsDuPoitouCharentes/flower-flowers-draw.svg"
              alt="Un dessin d'une fleur de chataignier, de ronce et de tilleul"
              width={114}
              height={44}
            />

            <p>
              <strong>Goût:</strong> Corsé
            </p>
          </div>
        </div>
      </div>
      <Image
        className="miels__photo"
        src="/MesMielsDuPoitouCharentes/miel-de-fleurs.jpg"
        alt="Une photo des pots de miel de colza"
        width={318}
        height={200}
      />
    </div>
  );
};

export default MielDeFleurs;
