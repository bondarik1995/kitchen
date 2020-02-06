import React, { Component } from "react";
import cx from "classnames";
import Slider from "react-slick";

import {
  CATALOG_SLIDER_TITLE,
  CATALOG_SLIDER_SUBTITLE,
  CATALOG_WITH_SLIDER
} from "constants/CatalogSlider";
import { MAIN_FOLDER } from "constants/App";

import styles from "./CatalogSlider.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import stylesSlider from "styles/_slider.scss";

const SliderArrow = ({ className, onClick, ariaLabel, type }) => {
  return (
    <button
      className={cx(className, stylesSlider[`slider-arrow-${type}`])}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {ariaLabel}
    </button>
  );
};

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
    const settings = {
      dots: false,
      nextArrow: <SliderArrow ariaLabel="Вперед" type="next" />,
      prevArrow: <SliderArrow ariaLabel="Назад" type="prev" />
    };

    return (
      <div key={id}>
        {catalog && (
          <div className={cx(styles["catalog-slider-content"])}>
            <div className={cx(styles["catalog-slider-item"])}>
              <Slider {...settings}>
                {catalog.map((item, i) => (
                  <div key={`${id}-${i}`}>
                    <img src={`${MAIN_FOLDER}${item}`} alt="" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
        {description && (
          <p className={cx(styles["catalog-slider-description"])}>
            {description}
          </p>
        )}
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
