import React from "react";

import "./Catalog.css";

function Catalog() {
  return (
    <section className="section-catalog">
      <div className="section-catalog-discount">
        Акция! <b>-40%</b>
      </div>
      <div className="section-catalog-title">
        <h2>
          Наши <b>работы</b> - наша <b>гордость</b>
        </h2>
      </div>
      <div className="catalog">
        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Пластик (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>

        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Egger (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>

        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Клиф (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>

        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Fenix (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>

        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Пластик (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>

        <div className="catalog-item">
          <a href="/" className="catalog-item-img-link">
            <img
              src="images/catalog-item-1.jpg"
              alt=""
              className="catalog-item-img"
            />
          </a>
          <p className="catalog-item-name">Пластик (стоимость за м.п.)</p>
          <div className="catalog-item-prices">
            <p className="catalog-item-main-price cross-out">600 BYN</p>
            <p className="catalog-item-sale-price">350 BYN</p>
          </div>
          <button className="btn btn-default">Хочу эту кухню</button>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
