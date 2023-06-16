import React from "react";

import styles from "./Footer.module.scss";
import eyeWhite_logo from "../../assets/img/Eye/eyeWhite.png";

const Footer = () => {
  const handleScrollToZero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__wrapper}>
        <div className={styles.Footer__row}>
          <div className={styles.Footer__column} onClick={handleScrollToZero}>
            <img src={eyeWhite_logo} alt="" /> ВИДЕО МОНИТОРИНГ
          </div>
          <div className={styles.Footer__column}>
            Все права защищены <br /> Политика конфиденциальности
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
