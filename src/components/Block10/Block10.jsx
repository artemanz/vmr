import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируйте CSS-файл AOS

import styles from "./Block10.module.scss";

const Block10 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Block10} data-aos="fade-up">
      <div className={styles.Block10__wrapper}>
        <div className={styles.Block10__bText}>КЕЙС АЗС</div>
        <div className={styles.Block10__sbText}>
          Как увеличить доп. продажи и улучшить качество выполнения стандартов?
        </div>
        <div className={styles.Block10__row}>
          <div className={styles.Block10__column} data-aos="fade-right">
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
      </div>
    </div>
  );
};

export default Block10;
