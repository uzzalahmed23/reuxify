import FancyBtn from "./components/FancyBtn";
import Layout from "./components/layout/Layout";
import Modal from "./components/Modal";

function App() {
  return (
    <Layout>
      <section className="container py-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          repellendus libero quas porro vitae debitis voluptatum autem fugit
          dolores nam facilis ullam recusandae nobis eum ipsum. Hic aut tempora,
          molestias dignissimos nulla molestiae quae consequuntur modi quasi
          totam adipisci!
        </p>
      </section>
      <FancyBtn />
      <Modal />
    </Layout>
  );
}

export default App;
