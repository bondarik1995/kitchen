import React from "react";
import { YMaps, Map } from "react-yandex-maps";

import "./Contacts.scss";

function Contacts() {
  return (
    <section className="section-contacts">
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          width={"100%"}
          height={300}
        />
      </YMaps>

      <div className="contacts">
        <h2>
          Наши <b>контакты</b>
        </h2>
        <div className="contacts-description">
          <p>
            <a href="tel:+375333333333">
              +375 33 <b>333-33-33</b>
            </a>
          </p>
          <p>
            <a href="mailto:mail@mail.ru">mail@mail.ru</a>
          </p>
          <p>Минск, ул. Ульская, д.32, оф. 11</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
