import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BitrixForm.scss";

const BitrixForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn-ru.bitrix24.ru/b12896033/crm/form/loader_15.js';
    script.async = true;
    script.setAttribute('data-b24-form', 'inline/15/747ktj');
    script.setAttribute('data-skip-moving', 'true');

    const scriptTag = document.getElementsByTagName('script')[0];
    scriptTag.parentNode.insertBefore(script, scriptTag);

    return () => {
      scriptTag.parentNode.removeChild(script);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://servizoria.bitrix24.ru/rest/835/rb7btdk8jpicf7nk/crm.lead.add.json",
        {
          fields: {
            TITLE: "Новый лид",
            NAME: name,
            LAST_NAME: lastName,
            PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
            EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
            COMMENTS: question,
          },
        }
      );

      console.log("Лид успешно создан в Bitrix24", response.data);

      // Очистка полей формы после отправки
      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setQuestion("");
    } catch (error) {
      console.error("Ошибка при создании лида", error);
    }
  };

  return (
    <div className="bitrix-form" id="bitrix-form">
      <div className="bitrix-form_h2">
        <h1>Обратная связь</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="question"
            name="question"
            placeholder="Задайте вопрос"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default BitrixForm;
