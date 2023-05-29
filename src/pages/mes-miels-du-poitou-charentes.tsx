import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import MielDeColza from "@/components/sections/mes-miels-du-poitou-charentes/MielDeColza";
import MielDeFleurs from "@/components/sections/mes-miels-du-poitou-charentes/MielDeFleurs";
import MielDeTournesol from "@/components/sections/mes-miels-du-poitou-charentes/MielDeTournesol";
import Head from "next/head";

export default function MesMielsDuPoitouCharentes() {
  return (
    <main className="mes-miels-du-poitou-charentes">
      <Head>
        <title>
          Découvrez mes miels récoltés, extraits et mis en pot en
          Poitou-Charentes | MielsDupuis
        </title>
        <meta
          name="description"
          content="Plongez dans l'univers de mes miels du Poitou-Charentes, récoltés avec passion. Profitez du miel de colza issu des fleurs de printemps. Savourez le miel de fleurs provenant d'une variété de fleurs sauvages butinées en forêt. Délectez-vous du miel de tournesol composé des fleurs d'été. Chaque miel offre une texture et un goût uniques, reflétant les saisons et les trésors de la nature."
        />
      </Head>

      <Header page="miels" />

      <Section title="Miel de Colza" content={<MielDeColza />} />
      <Section title="Miel de Fleurs" content={<MielDeFleurs />} />
      <Section title="Miel de Tournesol" content={<MielDeTournesol />} />

      <section className="mes-miels-du-poitou-charentes__button">
        <Button
          content="Où acheter mon miel ?"
          link="/ou-acheter-mon-miel"
          type="primary"
        />
      </section>

      <Footer />
    </main>
  );
}
