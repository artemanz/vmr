import React from "react";
import c from "./styles.module.scss";
import { HiMenu } from "react-icons/hi";
import { logoWhite } from "@images";

type Props = {
  setMobileMenu: Function;
};

const Header = ({ setMobileMenu }: Props) => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logoWhite} alt="Logo" />
          <p>
            Видео
            <br /> мониторинг
          </p>
        </div>

        <nav className={c.nav}>
          <a href="#features">Для кого</a>
          <a href="#tasks">Наша задача</a>
          <a href="#prices">Цены</a>
          <a href="#cases">Кейсы</a>
          <a href="#form">Оставить заявку</a>
        </nav>

        <button onClick={() => setMobileMenu(true)} className={c.mobileMenu}>
          <HiMenu size={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
