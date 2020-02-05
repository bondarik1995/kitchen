import React from "react";
import cx from "classnames";
import { YMaps, Map } from "react-yandex-maps";

import {
  CONTACTS_TITLE,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS
} from "constants/Contacts/";

import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <section className={cx(styles["section-contacts"])}>
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          width={"100%"}
          height={300}
        />
      </YMaps>

      <div className={cx(styles["contacts"])}>
        <h2>{CONTACTS_TITLE}</h2>
        <div className={cx(styles["contacts-description"])}>
          <p>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>{ADDRESS}</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
