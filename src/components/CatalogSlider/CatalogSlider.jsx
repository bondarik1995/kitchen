import React from "react";

import catalogSliderItem from "images/catalog-slider-item-1.jpg";

import "./CatalogSlider.scss";

function CatalogSlider() {
  return (
    <section className="section-catalog-slider">
      <div className="section-catalog-slider-title">
        <p>У нас вы можете заказать</p>
        <h2>сопутствующие товары</h2>
      </div>
      <div className="catalog-slider">
        <div className="catalog-slider-nav">
          <a href="/" className="catalog-slider-nav-item active">
            Фасады
          </a>
          <a href="/" className="catalog-slider-nav-item">
            Столешницы
          </a>
          <a href="/" className="catalog-slider-nav-item">
            Фурнитура
          </a>
          <a href="/" className="catalog-slider-nav-item">
            Люстры
          </a>
          <a href="/" className="catalog-slider-nav-item">
            Духовые шкафы
          </a>
          <a href="/" className="catalog-slider-nav-item">
            Вытяжки
          </a>
        </div>
        <div className="catalog-slider-content">
          <div className="catalog-slider-item">
            <img src={catalogSliderItem} alt="" />
          </div>
        </div>
        <div className="catalog-slider-description">
          <p>Мы предлагаем фасады из шпона, массива, и т.д.</p>
        </div>
      </div>
    </section>
  );
}

export default CatalogSlider;
