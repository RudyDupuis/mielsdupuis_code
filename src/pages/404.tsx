import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Error404 = () => {
  return (
    <main>
      <Header page="404" />

      <section className="error-404">
        <h2>Désolé, la page que vous recherchez n&apos;existe pas.</h2>
      </section>

      <Footer />
    </main>
  );
};

export default Error404;
