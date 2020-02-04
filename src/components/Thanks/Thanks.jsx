import React from "react";
import cx from "classnames";

import reviewPerson from "images/review-person.png";

import styles from "./Thanks.module.scss";

function Thanks() {
  return (
    <section className={cx(styles["section-thanks"])}>
      <div className={cx(styles["section-thanks-title"])}>
        <h2>Благодарности</h2>
      </div>
      <div className={cx(styles["reviews"])}>
        <div className={cx(styles["review"])}>
          <div className={cx(styles["review-media"])}>
            <img src={reviewPerson} alt="" className={cx(styles["review-img"])} />
          </div>
          <div className={cx(styles["review-description"])}>
            <p className={cx(styles["review-name"])}>Александр Иванович</p>
            <p>
              Хочу сказать огромное спасибо менеджеру Наталье Пахоменко,
              работающей в студии кухни "Мария" на Минской улице, д.17, за
              помощь в подборе кухни, разработке дизайн-проекта, подборе
              техники, фурнитуры.Наталья грамотно и профессионально сделала свою
              работу. Мы очень довольны выбором.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Thanks;
