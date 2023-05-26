import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Mentions from "@/components/sections/Mentions";

export default function MentionsLegales() {
  return (
    <main>
      <Header page="mentions-légales" />

      <Section content={<Mentions />} />

      <Footer />
    </main>
  );
}
