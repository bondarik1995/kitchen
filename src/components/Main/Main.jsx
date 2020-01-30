import React from "react";

import "./Main.css";

function Main() {
  return (
    <main>
      <div className="container">
        <section className="section-discount">
          <div className="section-discount-text">
            <p className="section-discount-top-text">
              Наши цены <b>МАКСИМАЛЬНО</b> разумны,
              <br />
              но Вы сможете и <b>СЭКОНОМИТЬ</b>!
            </p>

            <p>только до конца месяца</p>
            <p className="section-discount-attention">
              <b>АКЦИЯ!</b>
            </p>
          </div>

          <div className="discount-feetback">
            <p>Закажите кухню</p>
            <p className="discount-feetback-important-text">
              и получите скидку до 40%
            </p>
            <button className="btn btn-default">Не упустить шанс!</button>
          </div>
        </section>

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
                <img src="images/catalog-slider-item-1.jpg" alt="" />
              </div>
            </div>
            <div className="catalog-slider-description">
              <p>Мы предлагаем фасады из шпона, массива, и т.д.</p>
            </div>
          </div>
        </section>

        <section className="section-about">
          <div className="section-about-company">
            <div className="section-about-title">
              <h2>О компании</h2>
              <p>Наше производство насчитывает 400 кв.м.</p>
            </div>
            <div className="section-about-company-description">
              <p>
                За это время наша компания достигла высоких результатов в
                производстве корпусной мебели, в том числе и мебели для кухни по
                индивидуальным заказам. В цехах нашей компании установлено
                оборудование итальянских и немецких производителей.
              </p>
              <p>
                Мы предлагаем Вам подобрать кухню максимально отвечающую Вашим
                пожеланиям и возможностям. Технологии производства кухонь
                позволяют удовлетворить также и нестандартные пожелания, такие
                как гнутые фасады, решётки, балясины, фасады нестандартных
                размеров и многое другое.
              </p>
            </div>
          </div>
          <div className="section-about-team">
            <div className="section-about-title">
              <h2>Наша команда</h2>
              <p>Компания насчитывает более 50 сотрудников</p>
            </div>
            <div className="team">
              <div className="person">
                <img src="images/person.jpg" alt="" className="person-img" />
                <p className="person-name">Петр Иванов</p>
                <p className="person-description">мебельщик, стаж 27 лет</p>
              </div>
              <div className="person">
                <img src="images/person.jpg" alt="" className="person-img" />
                <p className="person-name">Петр Иванов</p>
                <p className="person-description">мебельщик, стаж 27 лет</p>
              </div>
              <div className="person">
                <img src="images/person.jpg" alt="" className="person-img" />
                <p className="person-name">Петр Иванов</p>
                <p className="person-description">мебельщик, стаж 27 лет</p>
              </div>
              <div className="person">
                <img src="images/person.jpg" alt="" className="person-img" />
                <p className="person-name">Петр Иванов</p>
                <p className="person-description">мебельщик, стаж 27 лет</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-feetback">
          <div className="section-feetback-title">
            <h2>Бесплатная консультация</h2>
            <p>
              При оформлении заказа прямо сейчас, вы получаете бесплатную
              консультацию от дизайнера и расчет стоимости
            </p>
          </div>
          <form className="section-feetback-form">
            <input type="text" className="input" placeholder="Имя*" />
            <input type="text" className="input" placeholder="Телефон*" />
            <button type="submit" className="btn btn-default">
              Узнать стоимость
            </button>
          </form>
        </section>

        <section className="section-reviews">
          <div className="section-reviews-title">
            <h2>
              <b>Отзывы</b> наших клиентов
            </h2>
          </div>
          <div className="section-reviews-content">
            <div className="section-reviews-description">
              <p className="section-reviews-description-title">Видеоотзывы</p>
              <p>
                Клиенты записывают нам видеоотзывы, чтобы выразить все свои
                эмоции от кухни-мечты! Присылайте свои отзывы и мы обязательно
                разметим их на нашем сайте.
              </p>
            </div>
            <div className="section-reviews-videos">
              <div className="section-reviews-video-item big">
                <iframe
                  title="video-1"
                  src="https://www.youtube.com/embed/ufCNzlueYAg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>
              <div className="section-reviews-video-item">
                <iframe
                  title="video-2"
                  src="https://www.youtube.com/embed/ufCNzlueYAg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>
              <div className="section-reviews-video-item">
                <iframe
                  title="video-3"
                  src="https://www.youtube.com/embed/ufCNzlueYAg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="section-thanks">
          <div className="section-thanks-title">
            <h2>Благодарности</h2>
          </div>
          <div className="reviews">
            <div className="review">
              <div className="review-media">
                <img
                  src="images/review-person.png"
                  alt=""
                  className="review-img"
                />
              </div>
              <div className="review-description">
                <p className="review-name">Александр Иванович</p>
                <p>
                  Хочу сказать огромное спасибо менеджеру Наталье Пахоменко,
                  работающей в студии кухни "Мария" на Минской улице, д.17, за
                  помощь в подборе кухни, разработке дизайн-проекта, подборе
                  техники, фурнитуры.Наталья грамотно и профессионально сделала
                  свою работу. Мы очень довольны выбором.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contacts">
          <script
            type="text/javascript"
            charset="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab45234641f4f274563cbe553232a554592fe69668964fdf0cd6a4d7567c89bdc&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true"
          ></script>

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
      </div>
    </main>
  );
}

export default Main;
