import React from "react";
import cx from "classnames";

import styles from "./Feetback.module.scss";

function Feetback() {
  return (
    <section className={cx(styles["section-feetback"])}>
      <div className={cx(styles["section-feetback-title"])}>
        <h2>Бесплатная консультация</h2>
        <p>
          При оформлении заказа прямо сейчас, вы получаете бесплатную
          консультацию от дизайнера и расчет стоимости
        </p>
      </div>
      <form className={cx(styles["section-feetback-form"])}>
        <input type="text" className={cx(styles["input"])} placeholder="Имя*" />
        <input
          type="text"
          className={cx(styles["input"])}
          placeholder="Телефон*"
        />
        <button type="submit" className={cx(styles["btn"])}>
          Узнать стоимость
        </button>
      </form>
    </section>
  );
}

export default Feetback;
