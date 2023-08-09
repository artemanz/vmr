import React from "react";
import c from "./styles.module.scss";
import { logoWhite } from "@/assets/images";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={c.footer}>
      <div className={c.container}>
        <Link to={"/"} className={c.logo}>
          <img src={logoWhite} alt="Logo" />
          <p>
            Видео
            <br /> мониторинг
          </p>
        </Link>

        <div className={c.info}>
          <p>Все права защищены</p>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
