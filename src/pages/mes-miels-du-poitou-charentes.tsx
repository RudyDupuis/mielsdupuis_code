import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import MielDeColza from "@/components/sections/mes-miels-du-poitou-charentes/MielDeColza";
import MielDeFleurs from "@/components/sections/mes-miels-du-poitou-charentes/MielDeFleurs";
import MielDeTournesol from "@/components/sections/mes-miels-du-poitou-charentes/MielDeTournesol";

export default function MesMielsDuPoitouCharentes() {
  return (
    <main>
      <Header page="miels" />

      <Section title="Miel de Colza" content={<MielDeColza />} />
      <Section title="Miel de Fleurs" content={<MielDeFleurs />} />
      <Section title="Miel de Tournesol" content={<MielDeTournesol />} />

      <Footer />
    </main>
  );
}
