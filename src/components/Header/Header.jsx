import React from "react";

import styles from "./Header.module.scss";
import Header_logo from "../../assets/img/Header/Header_logo.png";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

  const handleScrollTo = (Block) => {
    const neededBlock = document.querySelector(Block);
    const headerHeight = headerRef.current.offsetHeight;
    const topOffset = neededBlock.offsetTop - headerHeight;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
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

  const headerRef = React.useRef(null);

  return (
    <div className={styles.Header} ref={headerRef}>
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__row}>
          <div
            className={styles.Header__logo}
            onClick={() => handleScrollTo("#Block1")}
          >
            <img src={Header_logo} alt="" /> ВИДЕО МОНИТОРИНГ
          </div>
          <div className={styles.Header__info}>
            {/* <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#Block1")}
            >
              Подробнее
              <div className={styles.Header__info__underline}></div>
            </div> */}
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#Block34")}
            >
              Для кого
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#Block5")}
            >
              Наша задача
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#Block7")}
            >
              Цены
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#Block8")}
            >
              Кейсы
              <div className={styles.Header__info__underline}></div>
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo("#bitrix-form")}
            >
              Оставить заявку
              <div className={styles.Header__info__underline}></div>
            </div>
          </div>
          <div className={styles.Header__burger}>
            {isBurgerOpened ? (
              <div className={styles.Header__modal}>
                <ul>
                  {/* <li onClick={() => handleScrollTo("#Block1")}>Подробнее</li> */}
                  <li onClick={() => handleScrollTo("#Block34")}>Для кого</li>
                  <li onClick={() => handleScrollTo("#Block5")}>
                    Какие задачи мы решаем
                  </li>
                  <li onClick={() => handleScrollTo("#Block7")}>Цены</li>
                  <li onClick={() => handleScrollTo("#Block8")}>Кейсы</li>
                  <li onClick={() => handleScrollTo("#bitrix-form")}> Оставить заявку</li>
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
