import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import Block1 from "../../components/Block1/Block1";
import Block2 from "../../components/Block2/Block2";
import styles from "./MainPage.module.scss";
import Block5 from "../../components/Block5/Block5";
import Block34 from "../../components/Block34/Block34";
import Block6 from "../../components/Block6/Block6";
import Block7 from "../../components/Block7/Block7";
import Block8 from "../../components/Block8/Block8";
import Block9 from "../../components/Block9/Block9";
import Block10 from "../../components/Block10/Block10";
import BitrixForm from "../../components/Form/Form";

const MainPage = () => {
  React.useEffect(() => {
    AOS.init({disable: 'mobile'})
  }, []);

  return (
    <div className={styles.MainPage}>
      <Block1 />
      <Block2 />
      <Block34 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <BitrixForm />
    </div>
  );
};

export default MainPage;
