import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import CommentEstProduitMonMiel from "@/components/sections/index/CommentEstProduitMonMiel";
import LImportanceDesAbeillesPourLeClimat from "@/components/sections/index/LImportanceDesAbeillesPourLeClimat";
import LesAvis from "@/components/sections/index/LesAvis";
import LesBienfaitsDuMiel from "@/components/sections/index/LesBienfaitsDuMiel";
import MesAbeilles from "@/components/sections/index/MesAbeilles";
import QuiSuisJe from "@/components/sections/index/QuiSuisJe";

export default function Accueil() {
  return (
    <main>
      <Header page="accueil" />

      <section className="index__buttons">
        <Button
          content="Où acheter mon miel ?"
          link="/ou-acheter-mon-miel"
          type="primary"
        />
        <Button
          content="Découvrir mon activité"
          link="#decouvrir-mon-activite"
          type="secondary"
        />
      </section>

      <Section
        title="Qui suis-je ?"
        content={<QuiSuisJe />}
        anchor="decouvrir-mon-activite"
      />
      <Section title="Mes abeilles" content={<MesAbeilles />} />
      <Section
        title="Comment est produit mon miel ?"
        content={<CommentEstProduitMonMiel />}
      />
      <Section
        title="Les bienfaits du miel"
        content={<LesBienfaitsDuMiel />}
        anchor="bienfaits"
      />
      <Section
        title="L’importance des abeilles pour le climat"
        content={<LImportanceDesAbeillesPourLeClimat />}
        anchor="climat"
      />
      <Section title="Les avis" content={<LesAvis />} />

      <Footer />
    </main>
  );
}
