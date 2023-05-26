import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import AchatEnGros from "@/components/sections/ou-acheter-mon-miel/AchatEnGros";
import CommanderEnLigne from "@/components/sections/ou-acheter-mon-miel/CommanderEnLigne";
import PointsDeVente from "@/components/sections/ou-acheter-mon-miel/PointsDeVente";

export default function OuAcheterMonMiels() {
  return (
    <main>
      <Header page="acheter" />

      <section className="ou-acheter-mon-miel__buttons">
        <Button
          content="Commander en ligne"
          link="#commander-en-ligne"
          type="secondary"
        />
        <Button
          content="Points de vente"
          link="#points-de-vente"
          type="secondary"
        />
        <Button
          content="Acheter en gros"
          link="#achat-en-gros"
          type="secondary"
        />
      </section>

      <Section
        title="Commander en ligne"
        content={<CommanderEnLigne />}
        anchor="commander-en-ligne"
      />

      <Section
        title="Points de vente"
        content={<PointsDeVente />}
        anchor="points-de-vente"
      />

      <Section
        title="Achat en gros"
        content={<AchatEnGros />}
        anchor="achat-en-gros"
      />

      <Footer />
    </main>
  );
}
