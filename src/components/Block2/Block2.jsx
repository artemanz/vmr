import React from "react";

import styles from "./Block2.module.scss";
import Block2_1 from "../../assets/img/Block2/Block2_1.png";
import Block2_2 from "../../assets/img/Block2/Block2_2.png";
import Block2_3 from "../../assets/img/Block2/Block2_3.png";
import Block2_4 from "../../assets/img/Block2/Block2_4.png";
import Block2_5 from "../../assets/img/Block2/Block2_5.png";
import Block2_6 from "../../assets/img/Block2/Block2_6.png";
import Block2_7 from "../../assets/img/Block2/Block2_7.png";
import Block2_8 from "../../assets/img/Block2/Block2_8.png";

const Block2 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#Block7");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };
  return (
    <div
      className={styles.Block2}
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div className={styles.Block2__wrapper}>
        <div className={styles.Block2__bText}>
          ПРОЦЕСС ИСПОЛЬЗОВАНИЯ УСЛУГИ ВИДЕОНАБЛЮДЕНИЯ
        </div>
        <div className={styles.Block2__grid}>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_1} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Непрерывный мониторинг локаций. Заполнение анкет по чек-листу
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_2} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Первичный анализ данных. Предоставление экспертной обратной связи
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_3} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Обсуждение промежуточных результатов мониторинга
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_4} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Проработка сотрудниками заполненных анкет
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_5} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Презентация результатов мониторинга сотрудникам
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_6} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Определение проседающих стандартов и зоны развития
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_7} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Повторный мониторинг для отслеживания динамики
            </div>
          </div>
          <div className={styles.Block2__cell}>
            <div className={styles.Block2__img}>
              <img src={Block2_8} alt="" />
            </div>
            <div className={styles.Block2__text}>
              Получение результатов, анализ динамики, корреляция показателей со
              статисткой продаж
            </div>
          </div>
        </div>
        <div className={styles.Block2__button}>
          <button onClick={scrollToForm}>Узнать цену</button>
        </div>
      </div>
    </div>
  );
};

export default Block2;
