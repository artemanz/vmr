import React, { useEffect } from "react";
import c from "./styles.module.scss";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {
  visible: boolean;
  setVisible: Function;
};

const MobileMenu = ({ visible, setVisible }: Props) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [visible]);

  return (
    <div className={[c.mobileMenu, visible ? c.active : c.hidden].join(" ")}>
      <div className={c.container}>
        <nav className={c.nav} onClick={() => setVisible(false)}>
          <a href="/#features">Для кого</a>
          <a href="/#tasks">Наша задача</a>
          <a href="/#prices">Цены</a>
          <a href="/#cases">Кейсы</a>
          <Link to="/blog">Блог</Link>
          <a className={c.button} href="#form">
            <span>Оставить заявку</span>
          </a>
        </nav>

        <button onClick={() => setVisible(false)} className={c.closeButton}>
          <HiX size={48} color="currentColor" />
        </button>

        <div className={c.contacts}>
          <a href="mailto:sales@servizoria.ru">sales@servizoria.ru</a>
          <a href="tel:74952680244">+7 (495) 268 02 44</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
