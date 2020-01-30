import React from "react";

import "./Feetback.css";

function Feetback() {
  return (
    <section className="section-feetback">
      <div className="section-feetback-title">
        <h2>Бесплатная консультация</h2>
        <p>
          При оформлении заказа прямо сейчас, вы получаете бесплатную
          консультацию от дизайнера и расчет стоимости
        </p>
      </div>
      <form className="section-feetback-form">
        <input type="text" className="input" placeholder="Имя*" />
        <input type="text" className="input" placeholder="Телефон*" />
        <button type="submit" className="btn btn-default">
          Узнать стоимость
        </button>
      </form>
    </section>
  );
}

export default Feetback;
