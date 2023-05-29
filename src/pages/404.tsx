import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Custom404 = () => {
  return (
    <main>
      <Header page="404" />

      <section>
        <h2>Désolé, la page que vous recherchez n&apos;existe pas.</h2>
      </section>

      <Footer />
    </main>
  );
};

export default Custom404;
