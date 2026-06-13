import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Videosec from "./Videosec";
import Imagesec from "./Imagesec.jsx";
import Table from "./Table.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Videosec />
      <Imagesec />
      <Table />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
