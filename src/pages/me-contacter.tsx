import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Contacts from "@/components/sections/Contacts";
import Head from "next/head";

export default function MeContacter() {
  return (
    <main>
      <Head>
        <title>
          Contactez-moi pour toutes vos questions et partenariats | MielsDupuis
        </title>
        <meta
          name="description"
          content="Besoin d'informations supplémentaires ou d'établir un partenariat ? Utilisez notre formulaire de contact pour entrer en contact avec moi, Rudy, l'apiculteur passionné derrière MielsDupuis. Je serai ravi de répondre à vos questions et de partager ma passion pour les miels du Poitou-Charentes avec vous."
        />
      </Head>

      <Header page="contacter" />

      <Section content={<Contacts />} />

      <Footer />
    </main>
  );
}
