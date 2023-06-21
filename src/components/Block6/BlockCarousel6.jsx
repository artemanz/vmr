import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./BlockCarousel6.scss";
import styles from "./Block6.module.scss";
const responsive = {
  0: { items: 1 },
};

const items2 = [
  <div className="item2" data-value="1">
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
          взаимодействие с нами будет для Вас максимально комфортным. Вы так же
          можете поручить нам установку видео камер
        </div>
      </div>
    </div>
  </div>,
  <div className="item2" data-value="2">
    <div className={styles.Block6__cell}>
      <div className={styles.Block6__sbText}>Безопасность</div>
      <div className={styles.Block6__text}>
        Все наши сотрудники проходят проверку внутренней службы безопасности, и
        так же готовы пройти Вашу при необходимости. Заключение NDA
      </div>
    </div>
    <div className={styles.Block6__cell}>
      <div className={styles.Block6__sbText}>Инновационные методики</div>
      <div className={styles.Block6__text}>
        Авторские методики в основе которой психотипирование: оценки
        субъективной стороны; невербаликиа; соционика; профайлинг; язык тела
      </div>
    </div>
  </div>,
  <div className="item2" data-value="3">
    <div className={styles.Block6__cell}>
      <div className={styles.Block6__sbText}>Скорость</div>
      <div className={styles.Block6__text}>
        Оперативное предоставление данных по проверкам на портале
      </div>
    </div>
    <div className={styles.Block6__cell}>
      <div className={styles.Block6__sbText}>Охват</div>
      <div className={styles.Block6__text}>
        Теперь не важно, где расположены локации, произвести оценку возможно
        даже в самом удаленном уголке страны и за ее пределами
      </div>
    </div>
  </div>,
];
const BlockCarousel6 = () => {
  return (
    <div>
      <AliceCarousel
        disableButtonsControls=" false"
        infinite="true"
        mouseTracking
        items={items2}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default BlockCarousel6;
