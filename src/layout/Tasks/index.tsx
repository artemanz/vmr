import React from "react";
import c from "./styles.module.scss";
import { tasks } from "@/assets/images";

type Props = {};

const Tasks = (props: Props) => {
  return (
    <section className={c.section} id="tasks">
      <img src={tasks} alt="Background image" className={c.background} />

      <div className={c.container}>
        <h2 className={c.title}>ЗАДАЧИ, РЕШАЕМЫЕ С ПОМОЩЬЮ ВМР</h2>

        <ul className={c.list}>
          <li className={c.listItem} data-aos="fade-right">
            Подсчет трафика клиентов
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Контроль своевременности открытия/закрытия точек
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Контроль поведения сотрудников на точке: соблюдение трудовой
            дисциплины, дресс-кода
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Контроль внешнего вида точки, мерчандайзинга, размещения
            POS-материалов
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Фиксация случаев мошенничества, как со стороны сотрудников, так и
            клиентов
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Выявление проблемных зон и критических нарушений
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Проверка и отработка клиентских жалоб
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Контроль адаптации стажеров, выявление зон развития
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Повышение уровня профессиональных знаний и умений сотрудников
            (развитие персонала)
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Контроль отработки техники продаж, продвижения новых продуктов
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Анализ корреляции действий сотрудника и поведения клиента
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Анализ сегментации клиентов по гендерному, возрастному, клиентскому
            признаку (потенциальный или существующий клиент)
          </li>
          <li className={c.listItem} data-aos="fade-right">
            Кассовая аналитика и видеоархив операций
          </li>
        </ul>
        <div className={c.offer}>
          <p>Расскажите о своей задаче</p>
          <p>Оставьте заявку на помощь в разработке коцнепции исследования</p>
        </div>
        <a className={c.button} href="#form">
          Обсудить вашу задачу
        </a>
      </div>
    </section>
  );
};

export default Tasks;
