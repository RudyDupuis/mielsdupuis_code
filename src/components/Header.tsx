import Image from "next/image";
import Nav from "./Nav";

interface Props {
  page: "accueil" | "miels" | "acheter" | "contacter" | "mentions-légales";
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
  }

  return (
    <header>
      <Nav />
      <div>
        {title}
        {imageSrc && (
          <Image src={imageSrc} alt={imageAlt} width={487} height={463} />
        )}
      </div>
    </header>
  );
};

export default Header;
