import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function OuAcheterMonMiels() {
  return (
    <main>
      <Header page="acheter" />

      <section className="ou-acheter-mon-miel__buttons">
        <Button content="Commander en ligne" link="" type="secondary" />
        <Button content="Points de vente" link="" type="secondary" />
        <Button content="Acheter en gros" link="" type="secondary" />
      </section>

      <Footer />
    </main>
  );
}
