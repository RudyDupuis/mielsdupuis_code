import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import AchatEnGros from "@/components/sections/ou-acheter-mon-miel/AchatEnGros";
import CommanderEnLigne from "@/components/sections/ou-acheter-mon-miel/CommanderEnLigne";
import PointsDeVente from "@/components/sections/ou-acheter-mon-miel/PointsDeVente";
import Head from "next/head";

export default function OuAcheterMonMiels() {
  return (
    <main>
      <Head>
        <title>
          Où acheter mon miel artisanal du Poitou-Charentes| Points de vente et
          commande en ligne | MielsDupuis
        </title>
        <meta
          name="description"
          content="Découvrez où acheter mon miel artisanal produit en Poitou-Charentes. Commandez en ligne sur mavillemonshopping.fr et recevez vos produits en colissimo. Retrouvez également mes points de vente à Vouillé, Neuville, Loudun, Poitiers et Monts sur Guesnes. Pour les commandes en gros, profitez de tarifs préférentiels. Contactez-moi dès maintenant pour obtenir des quantités importantes de miel délicieux, disponible en pots de différentes tailles et en seaux ou fûts alimentaires."
        />
      </Head>

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
