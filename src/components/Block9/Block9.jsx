import React from "react";

import styles from "./Block9.module.scss";

const Block9 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div
      className={styles.Block9}
      data-aos="fade-up-left"
      data-aos-duration="1500"
    >
      <div className={styles.Block9__wrapper}>
        <div className={styles.Block9__bText}>ТЕЛЕКОММУНИКАЦИИ</div>
        <div className={styles.Block9__sbText}>
          Обеспечение качества сервиса в Розничной сети продаж
        </div>
        <div
          className={styles.Block9__texts}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Оценка эффективности <span>модели поведения сотрудников</span>{" "}
              Розничной сети для развития клиентского сервиса
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Предоставление <span>регулярной аналитики</span> по качеству
              сервиса
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Выявление проблемных зон и управление{" "}
              <span>качеством сервиса</span> в торговых точках
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              <span>Совершенствование</span> клиентских процедур (развитие
              клиентского сервиса)
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Повышение <span>уровня профессиональных</span> знаний и умений
              сотрудников
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Выявление <span>критических нарушений</span> стандартов сервиса и
              законодательства
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Выявление нарушений напрямую влияет на{" "}
              <span>мотивационную систему</span>
              сотрудника
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Проверка по чек-листу консультации, показывающая{" "}
              <span>реальные навыки и умения</span> сотрудника
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Выявление <span>фрода</span>
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              <span>Быстрая передача информации</span> при выявлении сложности в
              работе салона
            </div>
          </div>
          <div className={styles.Block9__text__row}>
            <div className={styles.Block9__tochka}></div>
            <div className={styles.Block9__text}>
              Объем более <span>15000</span> анкет ежемесячно
            </div>
          </div>
        </div>
        <div className={styles.Block9__button}>
          <button onClick={scrollToForm}>Задать вопрос</button>
        </div>
      </div>
    </div>
  );
};

export default Block9;
