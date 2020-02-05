import React, { Component } from "react";
import cx from "classnames";

import {
  CATALOG_TITLE,
  CATALOG,
  CATALOG_ORDER_BUTTON
} from "constants/Catalog";
import { DISCOUNT, DISCOUNT_SIZE } from "constants/Discount";

import catalogItem from "images/catalog-item-1.jpg";

import styles from "./Catalog.module.scss";

class Catalog extends Component {
  state = {};

  componentDidMount() {
    this.setState({ catalog: CATALOG });
  }

  renderCatalogItem = item => {
    const { id, link, name, price, currency, discount } = item;

    return (
      <div className={cx(styles["catalog-item"])} key={id}>
        <a href={link} className={cx(styles["catalog-item-img-link"])}>
          <img
            src={catalogItem}
            alt=""
            className={cx(styles["catalog-item-img"])}
          />
        </a>
        {name && <p className={cx(styles["catalog-item-name"])}>{name}</p>}
        {price && (
          <div className={cx(styles["catalog-item-prices"])}>
            <p
              className={cx(styles["catalog-item-main-price"], {
                [styles["cross-out"]]: discount
              })}
            >
              {price}
              {currency && ` ${currency}`}
            </p>
            {discount && (
              <p className={cx(styles["catalog-item-sale-price"])}>
                {(price * (100 - discount)) / 100}
                {currency && ` ${currency}`}
              </p>
            )}
          </div>
        )}
        <button className={cx(styles["catalog-item-btn"])}>
          {CATALOG_ORDER_BUTTON}
        </button>
      </div>
    );
  };

  render() {
    const { catalog } = this.state;

    return (
      <section className={cx(styles["section-catalog"])}>
        <div className={cx(styles["section-catalog-discount"])}>
          {DISCOUNT} <b>{DISCOUNT_SIZE}</b>
        </div>
        <div className={cx(styles["section-catalog-title"])}>
          <h2>{CATALOG_TITLE}</h2>
        </div>
        {catalog && (
          <div className={cx(styles["catalog"])}>
            {catalog.map(item => this.renderCatalogItem(item))}
          </div>
        )}
      </section>
    );
  }
}

export default Catalog;
