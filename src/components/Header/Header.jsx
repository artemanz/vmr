import React from "react";

import styles from "./Header.module.scss";
import Header_logo from "../../assets/img/Header/Header_logo.png";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);

  const handleScrollTo = (px) => {
    window.scrollTo({
      top: px,
      behavior: "smooth",
    });
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
          <div className={styles.Header__logo}>
            <img src={Header_logo} alt="" />
          </div>
          <div className={styles.Header__info}>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(0)}
            >
              Подробнее
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(0)}
            >
              Для кого
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(0)}
            >
              Какие задачи мы решаем
            </div>
            <div
              className={styles.Header__info__text}
              onClick={() => handleScrollTo(0)}
            >
              Цены
            </div>
          </div>
          <div className={styles.Header__burger}>
            {isBurgerOpened ? (
              <div className={styles.Header__burger__opened}>
                <div className={styles.Header__modal}>
                  <ul>
                    <li onClick={() => handleScrollTo(0)}>Подробнее</li>
                    <li onClick={() => handleScrollTo(0)}>Для кого</li>
                    <li onClick={() => handleScrollTo(0)}>
                      Какие задачи мы решаем
                    </li>
                    <li onClick={() => handleScrollTo(0)}>Цены</li>
                  </ul>
                  <div className={styles.Header__burger__clicker}>
                    <div
                      className={styles.Header__burger__line}
                      onClick={handleCloseBurger}
                    ></div>
                  </div>  
                </div>
              </div>
            ) : (
              <div className={styles.Header__burger__closed}>
                <div className={styles.Header__burger__clicker}>
                  <div
                    className={styles.Header__burger__line}
                    onClick={handleOpenBurger}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
