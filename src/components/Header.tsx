import Image from "next/image";
import Nav from "./Nav";

interface Props {
  page:
    | "accueil"
    | "miels"
    | "acheter"
    | "contacter"
    | "mentions-légales"
    | "404";
}

const Header = ({ page }: Props) => {
  let title = <h1></h1>;
  let imageSrc = "";
  let imageAlt = "";

  switch (page) {
    case "accueil":
      title = (
        <h1>
          Vente directe de miel <br /> du Poitou-Charentes
        </h1>
      );
      imageSrc = "/Header/header_index.svg";
      imageAlt = "Dessin d'une ruche et d'abeilles";
      break;
    case "miels":
      title = <h1>Mes miels du Poitou-Charentes</h1>;
      imageSrc = "/Header/header_miels.svg";
      imageAlt = "Dessin d'abeilles sur des fleurs d'acacia";
      break;
    case "acheter":
      title = <h1>Où acheter mon miel ?</h1>;
      imageSrc = "/Header/header_acheter.svg";
      imageAlt = "Dessin de trois pots de miel";
      break;
    case "contacter":
      title = <h1>Me contacter</h1>;
      break;
    case "mentions-légales":
      title = <h1>Mentions légales</h1>;
      break;
    case "404":
      title = <h1>Page non trouvée</h1>;
      break;
  }

  return (
    <header>
      <Nav />
      <div className="hero-banner">
        <div className="hero-banner__title">
          {title}{" "}
          {page === "accueil" && (
            <Image
              src="/Header/map.svg"
              alt="Une carte de france avec un flèche vers Guesnes avec inscrit : Produit à Guesnes"
              width={221}
              height={73}
              priority
            />
          )}
        </div>

        {imageSrc && (
          <Image
            className="hero-banner__draw"
            src={imageSrc}
            alt={imageAlt}
            width={487}
            height={463}
            priority
          />
        )}
      </div>
    </header>
  );
};

export default Header;
