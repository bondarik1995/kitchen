import React, { Component } from "react";
import cx from "classnames";

import {
  REVIEWS_TITLE,
  VIDEOS_TITLE,
  VIDEOS_DESCRIPTION,
  VIDEOS
} from "constants/Reviews";

import styles from "./Reviews.module.scss";

class Reviews extends Component {
  state = {};

  componentDidMount() {
    this.setState({ videos: VIDEOS });
  }

  renderVideo = video => {
    const { id, title, src, fullSize } = video;

    return (
      <div
        className={cx(styles["section-reviews-video-item"], {
          [styles["big"]]: fullSize
        })}
        key={id}
      >
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  render() {
    const { videos } = this.state;

    return (
      <section className={cx(styles["section-reviews"])}>
        <div className={cx(styles["section-reviews-title"])}>
          <h2>{REVIEWS_TITLE}</h2>
        </div>
        <div className={cx(styles["section-reviews-content"])}>
          <div className={cx(styles["section-reviews-description"])}>
            <p className={cx(styles["section-reviews-description-title"])}>
              {VIDEOS_TITLE}
            </p>
            <p>{VIDEOS_DESCRIPTION}</p>
          </div>
          {videos && (
            <div className={cx(styles["section-reviews-videos"])}>
              {videos.map(item => this.renderVideo(item))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Reviews;
