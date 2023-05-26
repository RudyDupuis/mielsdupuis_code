import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Contacts from "@/components/sections/Contacts";

export default function MeContacter() {
  return (
    <main>
      <Header page="contacter" />

      <Section content={<Contacts />} />

      <Footer />
    </main>
  );
}
