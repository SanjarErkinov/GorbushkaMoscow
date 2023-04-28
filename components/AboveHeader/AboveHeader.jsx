import React from "react";
import s from "./AboveHeader.module.css";
const AboveHeader = () => {
  return (
    <header className={s.aboveHeader}>
      <div className={s.aboveHeader_all}>
        <div className={s.aboveHeader__location}>
          <img className={s.location_img} src="./location.svg" alt="location" />
          <p>ТЦ Горбушка, г. Москва, ул. Барклая, 8</p>
        </div>
        <nav className={s.aboveHeader_title}>
          <ul className={s.aboveHeader_title_li}>
            <li>
              {" "}
              <a className={s.aboveHeader_description} href="#">О компании</a>
            </li>
            <li>
              {" "}
              <a className={s.aboveHeader_description} href="#">Доставка и оплата</a>
            </li>
            <li>
              {" "}
              <a className={s.aboveHeader_description} href="#">Обмен и возврат</a>
            </li>
            <li>
              {" "}
              <a className={s.aboveHeader_description} href="#">Гарантия и сервис</a>
            </li>
            <li>
              {" "}
              <a className={s.aboveHeader_description} href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AboveHeader;