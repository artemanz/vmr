import React from "react";
import c from "./styles.module.scss";
import { logoWhite } from "@/assets/images";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={c.footer}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logoWhite} alt="Logo" />
          <p>
            Видео
            <br /> мониторинг
          </p>
        </div>

        <div className={c.info}>
          <p>Все права защищены</p>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
