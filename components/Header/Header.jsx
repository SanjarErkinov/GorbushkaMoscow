import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_all}>
        <div className={s.header_logo}>
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className={s.header_input}>
          <input type="text" />
          <button>Найти</button>
        </div>
        <div className={s.social}>
          <img src="./telegram.svg" alt="telegram" />
          <img src="./whatsapp.svg" alt="whatsapp" />
        </div>
        <div className={s.header_connection}>
          <img src="./connection.svg" alt="connection" />
          <h4>+7 (916) 842-34-30</h4>
        </div>
        <div className={s.header_active}>
            <img src="./union.svg" alt="union" />
            <img src="./heart.svg" alt="heart" />
        </div>
      </div>
      <div className={s.header_down}>
        <button className={s.catalog} >Каталог</button>
        <button className={s.iphone}>iPhone 14 Pro Макс 256</button>
        <button className={s.appletv}>Apple TV 4K 2022</button>
        <button className={s.watch}> Apple Watch Series Ultra</button>
        <button className={s.macbook}>MacBook Pro 14 M2</button>
        <button className={s.ipad}>iPad Pro M2</button>
      </div>
    </header>
  );
};

export default Header;
