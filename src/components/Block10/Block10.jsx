import React from "react";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import styles from "./Block10.module.scss";

const Block10 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div className={styles.Block10} data-aos="fade-up" data-aos-duration="1500">
      <div className={styles.Block10__wrapper}>
        <div className={styles.Block10__bText}>АЗС</div>
        <div className={styles.Block10__sbText}>
          Как увеличить доп. продажи и улучшить качество выполнения стандартов?
        </div>
        <div className={styles.Block10__row}>
          <div
            className={styles.Block10__column}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Оценка эффективности модели поведения сотрудников
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Выявление проблемных зон и управление качеством сервиса в
                торговых точках
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Мотивация сотрудников (KPI)
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Совершенствование клиентских процедур (развитие клиентского
                сервиса)
              </div>
            </div>
          </div>
          <div className={styles.Block10__column} data-aos="fade-left">
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Повышение уровня профессиональных знаний и умений сотрудников
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Выявление критических нарушений стандартов сервиса и
                законодательства
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Соблюдение кассовой дисциплины
              </div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>Тепловая карта локации</div>
            </div>
            <div className={styles.Block10__text__row}>
              <div className={styles.Block10__tochka}></div>
              <div className={styles.Block10__text}>
                Анализ состояния локации
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Block10__button}>
          <button onClick={scrollToForm}>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Block10;
