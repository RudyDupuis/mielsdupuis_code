import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import CommentEstProduitMonMiel from "@/components/sections/index/CommentEstProduitMonMiel";
import LImportanceDesAbeillesPourLeClimat from "@/components/sections/index/LImportanceDesAbeillesPourLeClimat";
import IlsOntDonneLeursAvis from "@/components/sections/index/IlsOntDonneLeursAvis";
import LesBienfaitsDuMiel from "@/components/sections/index/LesBienfaitsDuMiel";
import MesAbeilles from "@/components/sections/index/MesAbeilles";
import QuiSuisJe from "@/components/sections/index/QuiSuisJe";
import Head from "next/head";

export default function Accueil() {
  return (
    <main>
      <Head>
        <title>
          MielsDupuis - Vente directe de miel artisanal du Poitou-Charentes
        </title>
        <meta
          name="description"
          content="Je suis Rudy, l'apiculteur passionné derrière MielsDupuis. Découvrez mon miel artisanal produit dans la région Poitou-Charentes. Mes abeilles butinent les fleurs sauvages, offrant un miel unique aux saveurs subtiles et variées. Du nectar des fleurs au pot, mon miel est le fruit d'un processus naturel et authentique. Appréciez la texture et les bienfaits de ce trésor doré. Commandez dès maintenant et laissez-vous séduire par la passion des abeilles et la qualité de notre miel."
        />
        <meta
          property="og:title"
          content="MielsDupuis - Vente directe de miel artisanal du Poitou-Charentes"
        />
        <meta
          property="og:description"
          content="Je suis Rudy, l'apiculteur passionné derrière MielsDupuis. Découvrez mon miel artisanal produit dans la région Poitou-Charentes. Mes abeilles butinent les fleurs sauvages, offrant un miel unique aux saveurs subtiles et variées. Du nectar des fleurs au pot, mon miel est le fruit d'un processus naturel et authentique. Appréciez la texture et les bienfaits de ce trésor doré. Commandez dès maintenant et laissez-vous séduire par la passion des abeilles et la qualité de notre miel."
        />
        <meta
          property="og:image"
          content="https://mielsdupuis.vercel.app/open-graph.png"
        />
        <meta property="og:url" content="https://mielsdupuis.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="MielsDupuis - Vente directe de miel artisanal du Poitou-Charentes"
        />
      </Head>

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
      <Section
        title="Ils ont donné leurs avis"
        content={<IlsOntDonneLeursAvis />}
      />

      <Footer />
    </main>
  );
}
