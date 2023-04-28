import s from "./Information.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Information = () => {
  return (
    <div className={s.container_information}>
      <div className={s.information_all}>
        <div className={s.information_description}>
          <h1>Мы рады, что вы с нами!</h1>

          <h4>Магазин электроники – Gorbushka _moscow</h4>
          <h4>
            Наш магазин на рынке с 2016 года. За это <br /> время мы научились
            понимать Вас без лишних <br /> слов и действий! 
          </h4>
          <h4>
            В продаже различная техника: от портативных <br /> колонок до
            кастомизированной техники, которую <br /> сейчас попросту не найти в{" "}
            <br /> свободной продаже в России.  Apple, Samsung, Xiaomi, JBL и
            другие - <br /> ТОЛЬКО ОРИГИНАЛ! 
          </h4>
        </div>
        <div className={s.information_adres}>
          <h2>Наш адрес не меняется уже 8 лет!  Мы находимся </h2>
          <div className={s.information_adres_title}>
          <p>
            Москва, ул. Барклая, д. 8  <br /> ТЦ Горбушка (старая), павильоны 108/1,
            185, 140/6
          </p>
          {/* <img src="./time.svg" alt="" /> */}
          <h5>Часы работы: с 10:00 до 21:00 без выходных</h5>
          </div>
        </div>
      </div>
      <Swiper
      grabCursor
      loop
      speed={2000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={6}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className={s.information_swiper}
      >
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
      <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className={s.swiper_img} src="./apple.svg" alt="" />
        </SwiperSlide>
       
      </Swiper>

    </div>
  );
};

export default Information;
