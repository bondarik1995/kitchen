import React from "react";
import cx from "classnames";

import catalogSliderItem from "images/catalog-slider-item-1.jpg";

import styles from "./CatalogSlider.module.scss";

function CatalogSlider() {
  return (
    <section className={cx(styles["section-catalog-slider"])}>
      <div className={cx(styles["section-catalog-slider-title"])}>
        <p>У нас вы можете заказать</p>
        <h2>сопутствующие товары</h2>
      </div>
      <div className={cx(styles["catalog-slider"])}>
        <div className={cx(styles["catalog-slider-nav"])}>
          <a
            href="/"
            className={cx(styles["catalog-slider-nav-item"], styles["active"])}
          >
            Фасады
          </a>
          <a href="/" className={cx(styles["catalog-slider-nav-item"])}>
            Столешницы
          </a>
          <a href="/" className={cx(styles["catalog-slider-nav-item"])}>
            Фурнитура
          </a>
          <a href="/" className={cx(styles["catalog-slider-nav-item"])}>
            Люстры
          </a>
          <a href="/" className={cx(styles["catalog-slider-nav-item"])}>
            Духовые шкафы
          </a>
          <a href="/" className={cx(styles["catalog-slider-nav-item"])}>
            Вытяжки
          </a>
        </div>
        <div className={cx(styles["catalog-slider-content"])}>
          <div className={cx(styles["catalog-slider-item"])}>
            <img src={catalogSliderItem} alt="" />
          </div>
        </div>
        <div className={cx(styles["catalog-slider-description"])}>
          <p>Мы предлагаем фасады из шпона, массива, и т.д.</p>
        </div>
      </div>
    </section>
  );
}

export default CatalogSlider;
