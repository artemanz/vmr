import { useState } from "react";
import { Footer, Header, MobileMenu } from "./components";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "swiper/css";
import "./style.scss";
import {
  Cases,
  Features,
  Form,
  Hero,
  Prices,
  Process,
  Realisation,
  Tasks,
} from "./layout";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="App">
      <Header setMobileMenu={setMobileMenu} />
      <main>
        <Hero />
        <Features />
        <Process />
        <Realisation />
        <Tasks />
        <Prices />
        <Cases />
        <Form />
      </main>

      <Footer />

      <MobileMenu visible={mobileMenu} setVisible={setMobileMenu} />
    </div>
  );
}

export default App;
