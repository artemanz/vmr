import React, { useState } from "react";
import "./BitrixForm.scss";

const BitrixForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Получите ссылку на ваш URL-обработчик формы в Битрикс 24
    const formActionUrl = "https://your-bitrix-url.com/rest/your-form-handler";

    // Соберите данные формы
    const formData = new FormData(e.target);

    // Отправьте данные на URL-обработчик с помощью Fetch API или другой метод отправки данных
    fetch(formActionUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Обработка успешного ответа от сервера
        console.log("Данные успешно отправлены:", response);

        // Очистка полей формы после отправки
        setName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setQuestion("");
      })
      .catch((error) => {
        // Обработка ошибки при отправке данных
        console.error("Ошибка отправки данных:", error);
      });
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
            placeholder="email"
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
