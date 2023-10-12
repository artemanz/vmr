import { SwiperSlide } from "swiper/react";
import c from "./styles.module.scss";
import { case1, case2, case3, case4, case5, case7 } from "@/assets/images";

export const cases = [
  {
    id: 1,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>Оптика</p>
          <p className={c.case_subtitle}>
            Контроль соблюдения операционной модели
          </p>
          <ul className={c.case_list}>
            <li className={c.case_item}>
              Контроль <span>фактического открытия</span> и закрытия салона
            </li>
            <li className={c.case_item}>
              Ежедневная <span>сверка товара с фиксацией</span> времени
            </li>
            <li className={c.case_item}>
              Оценка <span>выполнения стандартов</span> обслуживания
            </li>
            <li className={c.case_item}>
              Оценка <span>выполнения стандартов</span> поведения на рабочем
              месте
            </li>
            <li className={c.case_item}>
              <span>Мониторинг выхода сотрудников</span> в рабочее время в
              сравнении с данными биометрических устройств
            </li>
            <li className={c.case_item}>
              <span>Подсчет посетителей</span>, проходящих диагностику
            </li>
          </ul>
        </div>
        <img src={case1} alt="Case image" className={c.case_image} />
      </div>
    ),
  },
  {
    id: 2,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>ТЕЛЕКОММУНИКАЦИИ</p>
          <p className={c.case_subtitle}>
            Обеспечение качества сервиса в Розничной сети продаж
          </p>
          <ul className={c.case_list}>
            <li className={c.case_item}>
              Оценка эффективности <span>модели поведения сотрудников</span>{" "}
              Розничной сети для развития клиентского сервиса
            </li>
            <li className={c.case_item}>
              Предоставление <span>регулярной аналитики</span> по качеству
              сервиса
            </li>
            <li className={c.case_item}>
              Выявление проблемных зон и управление{" "}
              <span>качеством сервиса</span> в торговых точках
            </li>
            <li className={c.case_item}>
              <span>Совершенствование</span> клиентских процедур (развитие
              клиентского сервиса)
            </li>
            <li className={c.case_item}>
              Повышение <span>уровня профессиональных</span> знаний и умений
              сотрудников
            </li>
            <li className={c.case_item}>
              Выявление <span>критических нарушений</span> стандартов сервиса и
              законодательства
            </li>
            <li className={c.case_item}>
              Проверка по чек-листу консультации, показывающая{" "}
              <span>реальные навыки и умения</span> сотрудника
            </li>
          </ul>
        </div>
        <img src={case2} alt="Case image" className={c.case_image} />
      </div>
    ),
  },
  {
    id: 3,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>АЗС</p>
          <p className={c.case_subtitle}>
            Как увеличить доп. продажи и улучшить качество выполнения
            стандартов?Как увеличить доп. продажи и улучшить качество выполнения
            стандартов?
          </p>
          <ul className={c.case_list}>
            <li className={c.case_item}>
              Оценка эффективности <span>модели поведения сотрудников</span>
            </li>
            <li className={c.case_item}>
              Ежедневная сверка товара с фиксацией времени
            </li>
            <li className={c.case_item}>
              Оценка выполнения <span>стандартов обслуживания</span>
            </li>
            <li className={c.case_item}>
              Оценка выполнения <span>стандартов поведения</span> на рабочем
              месте
            </li>
            <li className={c.case_item}>
              Мониторинг выхода сотрудников в рабочее время в сравнении с
              данными <span>биометрических устройств</span>
            </li>
            <li className={c.case_item}>
              Подсчет посетителей, проходящих <span>диагностику</span>
            </li>
            <li className={c.case_item}>
              Расчет процента реальных покупателей (заказов)
            </li>
          </ul>
        </div>
        <img src={case3} alt="Case image" className={c.case_image} />
      </div>
    ),
  },
  {
    id: 4,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>ПРОДУКТОВАЯ РОЗНИЦА</p>
          <p className={c.case_subtitle}>
            Проверка выполнения операционных стандартов. Контроль соблюдения
            операционных стандартов в розничной сети.
          </p>
          <ul className={c.case_list}>
            <li className={c.case_p}>Мониторинг таких стандартов как:</li>
            <li className={c.case_item}>внешний вид торгового зала</li>
            <li className={c.case_item}>
              контроль рабочего времени и поведения продавца во время
              обслуживания​
            </li>
            <li className={c.case_item}>контроль соблюдения скрипта​</li>
            <li className={c.case_item}>
              контроль за информированием акций и дополнительных продаж
            </li>
          </ul>
          <ul className={c.case_list}>
            <li className={c.case_p}>Результат:</li>
            <li className={c.case_item}>
              увеличение среднего чека за счет систематического контроля за
              продвижением​
            </li>
            <li className={c.case_item}>
              оперативная информация по отклонениям от операционных стандартов
              посредствам он-лайн отчетности на портале​​
            </li>
            <li className={c.case_item}>
              повышение уровня лояльности клиентов​​
            </li>
            <li className={c.case_item}>
              мотивация персонала к выполнению стандартов​
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>ИНТЕРНЕТ МАГАЗИН​</p>
          <p className={c.case_subtitle}>
            Комплексный подход к аудиту работы сотрудников 360
          </p>
          <ul className={c.case_list}>
            <li className={c.case_item}>
              мониторинг выполнения стандартов сотрудниками при коммуникации в
              чате
            </li>
            <li className={c.case_item}>
              аудит корректности внесения информации в СРМ
            </li>
            <li className={c.case_item}>
              контроль работы с корзиной на предмет оперативности обработки
              заказов, а так же контроль за обработкой «брошенных» заказов​
            </li>
            <li className={c.case_item}>
              персонализированные оценки сотрудников – 6 оценок на каждого
              специалиста
            </li>
            <li className={c.case_item}>100+ оценок ежемесячно​</li>
            <li className={c.case_item}>
              прослушка и оценка телефонных диалогов операторов на предмет
              выполнения стандартов и расширения среднего чека​
            </li>
          </ul>
        </div>
        <img src={case5} alt="Case image" className={c.case_image} />
      </div>
    ),
  },
  {
    id: 6,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>ТАБАЧНЫЕ ИЗДЕЛИЯ</p>
          <p className={c.case_subtitle}>
            Комбинированный мониторинг: тайный покупатель и видеоанализ
          </p>
          <ul className={c.case_list}>
            <li className={c.case_p}>Тайный покупатель​</li>
            <li className={c.case_item}>
              моделирование консультации при которой у сотрудника есть
              возможность проявить знание и умение использовать стандарты​
            </li>
            <li className={c.case_item}>
              обучение сотрудников умению выполнять стандарты через
              разнообразные сценарии
            </li>
            <li className={c.case_item}>
              оценка субъективных параметров и рекомендаций тайных покупателей
              по итогу проверок​
            </li>
          </ul>
          <ul className={c.case_list}>
            <li className={c.case_p}>Видеомониторинг</li>
            <li className={c.case_item}>покрытие труднодоступных локаций</li>
            <li className={c.case_item}>
              персональные проверки сотрудников по графику работы​
            </li>
            <li className={c.case_item}>
              оценка выполнения стандартов в реальных консультациях с клиентами​
            </li>
            <li className={c.case_item}>
              оценка эмоционального настроения сотрудников и клиентов​
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    element: () => (
      <div className={c.case}>
        <div className={c.case_info}>
          <p className={c.case_title}>КОФЕЙНИ​</p>
          <p className={c.case_subtitle}>
            Оценка уровня обслуживания клиентов​
          </p>
          <ul className={c.case_list}>
            <li className={c.case_p}>Задачи исследования:</li>
            <li className={c.case_item}>
              оценка умения сотрудника подобрать подходящий напиток для клиента​
            </li>
            <li className={c.case_item}>подбор лучшего дополнения к напитку</li>
            <li className={c.case_item}>
              популяризация программы лояльности​​
            </li>
            <li className={c.case_item}>оценка навыков оформления напитков</li>
            <li className={c.case_item}>
              оценка выполнения стандартов внешнего вида сотрудников​
            </li>
            <li className={c.case_item}>
              фото оценка экспозиции и оформления кофеен
            </li>
          </ul>
          <ul className={c.case_list}>
            <li className={c.case_item}>
              <span>
                персональные оценки сотрудников согласно графику работы​
              </span>
            </li>
            <li className={c.case_item}>
              <span>замеры хронометража рабочего времени​</span>
            </li>
            <li className={c.case_item}>
              <span>расчет среднего времени для обслуживания клиентов</span>
            </li>
          </ul>
        </div>
        <img src={case7} alt="Case image" className={c.case_image} />
      </div>
    ),
  },
];
