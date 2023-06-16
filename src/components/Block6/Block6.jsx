import React from "react";

import styles from "./Block6.module.scss";

const Block6 = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#bitrix-form");
    const topOffset = form.offsetTop - 91;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div
      className={styles.Block6}
      data-aos="fade-up-right"
      data-aos-duration="1500"
    >
      <div className={styles.Block6__wrapper}>
        <div className={styles.Block6__bText}>
          Бесспорные преимущества работы с нами
        </div>
        <div className={styles.Block6__grid}>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Компетентный персонал</div>
            <div className={styles.Block6__text}>
              Подбор сотрудников на проект с необходимыми компетенциями и
              непрерывный процесс обучения и развития.
            </div>
          </div>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Забота</div>
            <div className={styles.Block6__text}>
              Благодаря персональному подходу и сервисному сопровождению,
              взаимодействие с нами будет для Вас максимально комфортным. Вы так
              же можете поручить нам установку видео камер
            </div>
          </div>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Безопасность</div>
            <div className={styles.Block6__text}>
              Все наши сотрудники проходят проверку внутренней службы
              безопасности, и так же готовы пройти Вашу при необходимости.
              Заключение NDA
            </div>
          </div>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Инновационные методики</div>
            <div className={styles.Block6__text}>
              Авторские методики в основе которой психотипирование: оценки
              субъективной стороны; невербаликиа; соционика; профайлинг; язык
              тела
            </div>
          </div>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Скорость</div>
            <div className={styles.Block6__text}>
              Оперативное предоставление данных по проверкам на портале
            </div>
          </div>
          <div className={styles.Block6__cell}>
            <div className={styles.Block6__sbText}>Охват</div>
            <div className={styles.Block6__text}>
              Теперь не важно, где расположены локации, произвести оценку
              возможно даже в самом удаленном уголке страны и за ее пределами
            </div>
          </div>
        </div>
        <div className={styles.Block6__button}>
          <button onClick={scrollToForm}>Задать вопрос</button>
        </div>
      </div>
    </div>
  );
};

export default Block6;
