import React from "react";

import styles from "./Header.module.scss";
import Header_logo from "../../assets/img/Header/Header_logo.png";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

  const handleScrollTo = (px) => {
    const a = document.querySelector("#Block5");
    a.scrollIntoView({ behavior: "smooth", block: 'start' });
    setIsBurgerOpened(false);
    document.body.classList.remove(styles.modalOpen);
  };

  const handleOpenBurger = () => {
    setIsBurgerOpened(true);
    document.body.classList.add(styles.modalOpen);
  };

  const handleCloseBurger = () => {
    setIsBurgerOpened(false);
    document.body.classList.remove(styles.modalOpen);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__row}>
          <div
            className={styles.Header__logo}
            onClick={() => handleScrollTo(0)}
          >
            <img src={Header_logo} alt="" /> ВИДЕО МОНИТОРИНГ
          </div>
          <div className={styles.Header__info}>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(0)}
            >
              Подробнее
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(1260)}
            >
              Для кого
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(2160)}
            >
              Какие задачи мы решаем
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(4790)}
            >
              Цены
              <div className={styles.Header__info__underline}></div>
            </div>
          </div>
          <div className={styles.Header__burger}>
            {isBurgerOpened ? (
              <div className={styles.Header__modal}>
                <ul>
                  <li onClick={() => handleScrollTo(0)}>Подробнее</li>
                  <li onClick={() => handleScrollTo(0)}>Для кого</li>
                  <li onClick={() => handleScrollTo(0)}>
                    Какие задачи мы решаем
                  </li>
                  <li onClick={() => handleScrollTo(0)}>Цены</li>
                </ul>
                <div
                  className={styles.Header__burger__opened}
                  onClick={handleCloseBurger}
                >
                  <div className={styles.Header__burger__line}></div>
                </div>
              </div>
            ) : (
              <div
                className={styles.Header__burger__closed}
                onClick={handleOpenBurger}
              >
                <div className={styles.Header__burger__line}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
