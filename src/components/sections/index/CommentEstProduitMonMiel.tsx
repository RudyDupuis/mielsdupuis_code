import Image from "next/image";
import Button from "../../Button";
import { useState } from "react";
import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";

const CommentEstProduitMonMiel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 700);

  return (
    <div className="comment-est-produit-mon-miel">
      <p className="comment-est-produit-mon-miel__text">
        <strong>Mon miel passe de la fleur au pot en 5 étapes.</strong> <br />
        Je suis fier de dire que{" "}
        <strong>mon miel est le moins travaillé possible</strong>. Je crois
        qu&apos;il est important de respecter le produit tel qu&apos;il est,
        sans modifier sa texture.
      </p>

      <div className="comment-est-produit-mon-miel__sketch">
        <Image
          className="comment-est-produit-mon-miel__sketch--draw-desktop"
          src="/Index/how-honey-desktop.svg"
          alt="Un dessin montrant les étapes de production de mon miel"
          width={711}
          height={432}
        />
        <Image
          className="comment-est-produit-mon-miel__sketch--draw-mobile"
          src="/Index/how-honey-mobile.svg"
          alt="Un dessin montrant les étapes de production de mon miel"
          width={217}
          height={903}
        />
        <p className="comment-est-produit-mon-miel__sketch--step1">
          Les abeilles <strong>récoltent le nectar</strong> sur les fleurs.
        </p>
        <p className="comment-est-produit-mon-miel__sketch--step2">
          Elles le <strong>transforment en miel</strong> dans la ruche.
        </p>
        <p className="comment-est-produit-mon-miel__sketch--step3">
          Les cadres remplis de miel sont placés dans l&apos;extracteur puis{" "}
          <strong>extrait à froid</strong> grâce à la force centrifuge.{" "}
        </p>
        <p className="comment-est-produit-mon-miel__sketch--step4">
          Ensuite, je <strong>stocke le miel</strong> dans des fûts
          alimentaires.
        </p>
        <p className="comment-est-produit-mon-miel__sketch--step5">
          Enfin, je réchauffe le miel à température de ruche (35 °C) pour le{" "}
          <strong>mettre en pot</strong>.
        </p>
      </div>

      <Button
        content={
          isSmallScreen
            ? "Découvrir mes miels"
            : "Découvrir mes miels du Poitou-Charentes"
        }
        link="/mes-miels-du-poitou-charentes"
        type="primary"
      />
    </div>
  );
};

export default CommentEstProduitMonMiel;
