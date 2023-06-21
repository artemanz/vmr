import React from "react";

import styles from "./Block1.module.scss";
import Img from "../../assets/img/Eye/eye.png";
// import ImgW from "../../assets/img/Eye/eyeWhite.png";
import Block1Carousel from "./Block1Carousel";

const Block1 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div
      className={styles.Block1}
      data-aos="fade-right"
      data-aos-duration="1500"
      id="Block1"
    >
      <div className={styles.Block1__wrapper}>
        <div className={styles.Block1__eye}>
          <img src={Img} alt="" />
          ВМР
        </div>
        <div className={styles.Block1__bText}>
          Глаз, который не устаёт следить
        </div>
        {/* <div className={styles.Block1__question}>Что такое ВМР?</div> */}
        <div className={styles.Block1__row}>
          <div className={styles.Block1__column}>
            <span>ВИДЕОМОНИТОРИНГ</span> - многогранный исследовательский
            инструмент, позволяющий корректировать поведенческие алгоритмы
            сотрудников и с их помощью влиять на реакцию и решение покупателей.
            Что в свою очередь открывает возможность повысить уровень продаж и
            удовлетворённость клиентов.
          </div>
          <div className={styles.Block1__column}>
            <span>ВИДЕОАНАЛИТИКА</span> - наиболее оптимальный инструмент с
            точки зрения бюджета и количества обрабатываемых данных. С его
            помощью вы всегда будете в курсе актуальной информации на местах, а
            проработка алгоритмов персонального обслуживания успешно повысит
            конверсию посетителей в покупателей.
          </div>
        </div>
        <div className={styles.Block1__carousel}>
          <Block1Carousel />
        </div>
        <div className={styles.Block1__button}>
          <button onClick={scrollToForm}>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Block1;
