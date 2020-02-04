import React from "react";
import cx from "classnames";

import personImg from "images/person.jpg";

import styles from "./About.module.scss";

function About() {
  return (
    <section className={cx(styles["section-about"])}>
      <div className={cx(styles["section-about-company"])}>
        <div className={cx(styles["section-about-title"])}>
          <h2>О компании</h2>
          <p>Наше производство насчитывает 400 кв.м.</p>
        </div>
        <div className={cx(styles["section-about-company-description"])}>
          <p>
            За это время наша компания достигла высоких результатов в
            производстве корпусной мебели, в том числе и мебели для кухни по
            индивидуальным заказам. В цехах нашей компании установлено
            оборудование итальянских и немецких производителей.
          </p>
          <p>
            Мы предлагаем Вам подобрать кухню максимально отвечающую Вашим
            пожеланиям и возможностям. Технологии производства кухонь позволяют
            удовлетворить также и нестандартные пожелания, такие как гнутые
            фасады, решётки, балясины, фасады нестандартных размеров и многое
            другое.
          </p>
        </div>
      </div>
      <div className={cx(styles["section-about-team"])}>
        <div className={cx(styles["section-about-title"])}>
          <h2>Наша команда</h2>
          <p>Компания насчитывает более 50 сотрудников</p>
        </div>
        <div className={cx(styles["team"])}>
          <div className={cx(styles["person"])}>
            <img src={personImg} alt="" className={cx(styles["person-img"])} />
            <p className={cx(styles["person-name"])}>Петр Иванов</p>
            <p className={cx(styles["person-description"])}>
              мебельщик, стаж 27 лет
            </p>
          </div>
          <div className={cx(styles["person"])}>
            <img src={personImg} alt="" className={cx(styles["person-img"])} />
            <p className={cx(styles["person-name"])}>Петр Иванов</p>
            <p className={cx(styles["person-description"])}>
              мебельщик, стаж 27 лет
            </p>
          </div>
          <div className={cx(styles["person"])}>
            <img src={personImg} alt="" className={cx(styles["person-img"])} />
            <p className={cx(styles["person-name"])}>Петр Иванов</p>
            <p className={cx(styles["person-description"])}>
              мебельщик, стаж 27 лет
            </p>
          </div>
          <div className={cx(styles["person"])}>
            <img src={personImg} alt="" className={cx(styles["person-img"])} />
            <p className={cx(styles["person-name"])}>Петр Иванов</p>
            <p className={cx(styles["person-description"])}>
              мебельщик, стаж 27 лет
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
