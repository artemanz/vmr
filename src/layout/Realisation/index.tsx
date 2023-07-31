import React from "react";
import c from "./styles.module.scss";

type Props = {};

const Realisation = (props: Props) => {
  return (
    <section className={c.section} id="realisation">
      <div className={c.container}>
        <h3 className={c.title}>Механика реализации</h3>
        <div className={c.grid}>
          <div className={c.grid_item} data-aos="fade-up">
            <p className={c.grid_item_number}>1</p>
            <p className={c.grid_item_title}>Разработка инструментария</p>
            <p className={c.grid_item_text}>
              Вовлекаемся в изучение стандартов, целей и поставленных KPI
              сотрудников и разрабатываем и согласовываем чек лист для оценки
            </p>
          </div>
          <div className={c.grid_item} data-aos="fade-up">
            <p className={c.grid_item_number}>2</p>
            <p className={c.grid_item_title}>Подготовка к запуску</p>
            <p className={c.grid_item_text}>
              Проводим интеграцию чек-листа на портале, производим настройки
              прав видимости пользователям, отправку уведомлений ответственным
              сотрудникам, готовим инструкции и обучаем валидаторов которые
              примут участие в мониторинге
            </p>
          </div>
          <div className={c.grid_item} data-aos="fade-up">
            <p className={c.grid_item_number}>3</p>
            <p className={c.grid_item_title}>Реализация</p>
            <p className={c.grid_item_text}>
              Подключаемся к видео потоку и отбираем видео отрезки по заранее
              оговоренным критериям, на основании просмотренных видео заполняем
              чек-лист, по итогу готовим аналитический отчет
            </p>
          </div>
          <div className={c.grid_item} data-aos="fade-up">
            <p className={c.grid_item_number}>4</p>
            <p className={c.grid_item_title}>Результат</p>
            <p className={c.grid_item_text}>
              На портале доступны все заполненные анкеты, результаты
              отображаются в виде графиков и даш бордов в On-line режиме,
              презентация аналитического отчета с экспертными выводами и
              рекомендациями
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisation;
