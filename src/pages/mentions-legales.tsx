import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Mentions from "@/components/sections/Mentions";
import Head from "next/head";

export default function MentionsLegales() {
  return (
    <main>
      <Head>
        <title>Mentions légales | MielsDupuis</title>
        <meta
          name="description"
          content="Consultez les mentions légales de MielsDupuis pour obtenir des informations sur mon activité apicole et la vente de mes miels artisanaux. En tant qu'apiculteur passionné, je m'engage à respecter les réglementations en vigueur et à fournir des produits de qualité, issus du travail de mes abeilles du Poitou-Charentes."
        />
      </Head>

      <Header page="mentions-légales" />

      <Section content={<Mentions />} />

      <Footer />
    </main>
  );
}
