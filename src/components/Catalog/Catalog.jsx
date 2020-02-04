import React from "react";
import cx from "classnames";

import catalogItem from "images/catalog-item-1.jpg";

import styles from "./Catalog.module.scss";

function Catalog() {
  return (
    <section className={cx(styles["section-catalog"])}>
      <div className={cx(styles["section-catalog-discount"])}>
        Акция! <b>-40%</b>
      </div>
      <div className={cx(styles["section-catalog-title"])}>
        <h2>
          Наши <b>работы</b> - наша <b>гордость</b>
        </h2>
      </div>
      <div className={cx(styles["catalog"])}>
        <div className={cx(styles["catalog-item"])}>
          <a href="/" className={cx(styles["catalog-item-img-link"])}>
            <img
              src={catalogItem}
              alt=""
              className={cx(styles["catalog-item-img"])}
            />
          </a>
          <p className={cx(styles["catalog-item-name"])}>
            Пластик (стоимость за м.п.)
          </p>
          <div className={cx(styles["catalog-item-prices"])}>
            <p
              className={cx(
                styles["catalog-item-main-price"],
                styles["cross-out"]
              )}
            >
              600 BYN
            </p>
            <p className={cx(styles["catalog-item-sale-price"])}>350 BYN</p>
          </div>
          <button className={cx(styles["catalog-item-btn"])}>
            Хочу эту кухню
          </button>
        </div>

        <div className={cx(styles["catalog-item"])}>
          <a href="/" className={cx(styles["catalog-item-img-link"])}>
            <img
              src={catalogItem}
              alt=""
              className={cx(styles["catalog-item-img"])}
            />
          </a>
          <p className={cx(styles["catalog-item-name"])}>
            Пластик (стоимость за м.п.)
          </p>
          <div className={cx(styles["catalog-item-prices"])}>
            <p
              className={cx(
                styles["catalog-item-main-price"],
                styles["cross-out"]
              )}
            >
              600 BYN
            </p>
            <p className={cx(styles["catalog-item-sale-price"])}>350 BYN</p>
          </div>
          <button className={cx(styles["catalog-item-btn"])}>
            Хочу эту кухню
          </button>
        </div>

        <div className={cx(styles["catalog-item"])}>
          <a href="/" className={cx(styles["catalog-item-img-link"])}>
            <img
              src={catalogItem}
              alt=""
              className={cx(styles["catalog-item-img"])}
            />
          </a>
          <p className={cx(styles["catalog-item-name"])}>
            Пластик (стоимость за м.п.)
          </p>
          <div className={cx(styles["catalog-item-prices"])}>
            <p
              className={cx(
                styles["catalog-item-main-price"],
                styles["cross-out"]
              )}
            >
              600 BYN
            </p>
            <p className={cx(styles["catalog-item-sale-price"])}>350 BYN</p>
          </div>
          <button className={cx(styles["catalog-item-btn"])}>
            Хочу эту кухню
          </button>
        </div>

        <div className={cx(styles["catalog-item"])}>
          <a href="/" className={cx(styles["catalog-item-img-link"])}>
            <img
              src={catalogItem}
              alt=""
              className={cx(styles["catalog-item-img"])}
            />
          </a>
          <p className={cx(styles["catalog-item-name"])}>
            Пластик (стоимость за м.п.)
          </p>
          <div className={cx(styles["catalog-item-prices"])}>
            <p
              className={cx(
                styles["catalog-item-main-price"],
                styles["cross-out"]
              )}
            >
              600 BYN
            </p>
            <p className={cx(styles["catalog-item-sale-price"])}>350 BYN</p>
          </div>
          <button className={cx(styles["catalog-item-btn"])}>
            Хочу эту кухню
          </button>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
