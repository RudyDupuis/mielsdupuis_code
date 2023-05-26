import Button from "@/components/Button";
import Image from "next/image";

const CommanderEnLigne = () => {
  return (
    <div className="commander-en-ligne">
      <div>
        <p>
          Vous pouvez commander mes produits sur le site mavillemonshopping.fr
          (une filiale de la Poste) et les recevoir en colissimo.
        </p>
        <Button
          content="Commander en ligne"
          link="https://www.mavillemonshopping.fr/fr/poitiers/boutiques/mielsdupuis"
          type="primary"
        />
      </div>
      <Image
        src="/OuAcheterMonMiel/box-draw.svg"
        alt="Une dessin d'un carton rempli de pot de miel"
        width={247}
        height={200}
      />
    </div>
  );
};

export default CommanderEnLigne;
