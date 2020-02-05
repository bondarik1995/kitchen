import React, { Component } from "react";
import cx from "classnames";

import {
  CATALOG_SLIDER_TITLE,
  CATALOG_SLIDER_SUBTITLE,
  CATALOG_WITH_SLIDER
} from "constants/CatalogSlider/";

import catalogSliderItem from "images/catalog-slider-item-1.jpg";

import styles from "./CatalogSlider.module.scss";

class CatalogSlider extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      catalog: CATALOG_WITH_SLIDER,
      activeCatalog: CATALOG_WITH_SLIDER[0].id
    });
  }

  renderNavItem = navItem => {
    const { id, title } = navItem;
    const { activeCatalog } = this.state;

    return (
      <button
        className={cx(styles["catalog-slider-nav-item"], {
          [styles["active"]]: id === activeCatalog
        })}
        onClick={() => this.setState({ activeCatalog: id })}
        key={id}
      >
        {title}
      </button>
    );
  };

  renderCatalogContent = content => {
    const { id, catalog, description } = content;

    return (
      <div key={id}>
        <div className={cx(styles["catalog-slider-content"])}>
          <div className={cx(styles["catalog-slider-item"])}>
            <img src={catalogSliderItem} alt="" />
          </div>
        </div>
        <div className={cx(styles["catalog-slider-description"])}>
          {description && <p>{description}</p>}
        </div>
      </div>
    );
  };

  render() {
    const { catalog, activeCatalog } = this.state;

    return (
      <section className={cx(styles["section-catalog-slider"])}>
        <div className={cx(styles["section-catalog-slider-title"])}>
          <p>{CATALOG_SLIDER_SUBTITLE}</p>
          <h2>{CATALOG_SLIDER_TITLE}</h2>
        </div>
        {catalog && (
          <div className={cx(styles["catalog-slider"])}>
            <div className={cx(styles["catalog-slider-nav"])}>
              {catalog.map(item => this.renderNavItem(item))}
            </div>
            {catalog
              .filter(item => item.id === activeCatalog)
              .map(item => this.renderCatalogContent(item))}
          </div>
        )}
      </section>
    );
  }
}

export default CatalogSlider;
