import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import MesAbeilles from "@/components/sections/MesAbeilles";
import QuiSuisJe from "@/components/sections/QuiSuisJe";

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

      <Footer />
    </main>
  );
}
