import Image from "next/image";
import Button from "../../Button";

const CommentEstProduitMonMiel = () => {
  return (
    <div className="comment-est-produit-mon-miel">
      <p>
        Mon miel passe de la fleur au pot en 5 étapes. <br />
        Je suis fier de dire que mon miel est le moins travaillé possible. Je
        crois qu&apos;il est important de respecter le produit tel qu&apos;il
        est, sans modifier sa texture.
      </p>

      <Image
        src="/Index/how-desktop.svg"
        alt="Un dessin décrivant comment est produit mon miel"
        width={712}
        height={507}
      />
      <Image
        src="/Index/how-mobile.svg"
        alt="Un dessin décrivant comment est produit mon miel"
        width={296}
        height={1003}
      />

      <Button
        content="Découvrir mes miels du Poitou-Charentes"
        link="/mes-miels-du-poitou-charentes"
        type="primary"
      />
    </div>
  );
};

export default CommentEstProduitMonMiel;
