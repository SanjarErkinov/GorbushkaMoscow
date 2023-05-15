import styles from './First.module.css'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";



const First = () => {
    return (
        <div className={styles.first}>
            <div className={styles.first__container}>
                <div className={styles.first__body}>
                    <div className={styles.banner__block}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            speed={600}
                            autoplay={{ delay: 2000 }}
                            modules={[ Navigation, Autoplay]}
                            className={styles.swiperFirst}
                        >
                            <SwiperSlide className={styles.swiperSlide}><div className={styles.banner__slide}>
                                <div className={styles.banner__slide_content}>
                                    <h1>Большой</h1>
                                    <h1>и еще больше</h1>
                                    <p>Iphone 14 pro и Iphone 14 <br /> pro Max уже в продаже. </p>
                                    <button>Купить</button>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}><div className={styles.banner__slide}>
                                <div className={styles.banner__slide_content}>
                                    <h1>Большой</h1>
                                    <h1>и еще больше</h1>
                                    <p>Iphone 14 pro и Iphone 14 <br /> pro Max уже в продаже. </p>
                                    <button>Купить</button>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}><div className={styles.banner__slide}>
                                <div className={styles.banner__slide_content}>
                                    <h1>Большой</h1>
                                    <h1>и еще больше</h1>
                                    <p>Iphone 14 pro и Iphone 14 <br /> pro Max уже в продаже. </p>
                                    <button>Купить</button>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                        <div className={styles.banner__product}>
                            <div className={styles.banner__product_container}>
                                <div className={styles.banner__product_body}>
                                    <div className={styles.banner__product_title}>
                                        <h1>Товар дня</h1>
                                        <div className={styles.card__icon}>
                                            <Image src='/Image/FirstBlock/Union.png' alt='Union' width={14} height={17} />
                                            <Image className={styles.product__favorites} src='/Image/FirstBlock/like.png' alt='Union' width={19} height={18} />
                                        </div>
                                    </div>
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        autoplay={{ delay: 2500 }}
                                        speed={700}
                                        modules={[ Navigation, Autoplay]}
                                        className="cardSwiper"
                                    >
                                        <SwiperSlide>
                                            <div className={styles.banner__product_slide}>
                                                <Image src='/Image/FirstBlock/apple-watch.png' alt="Apple-Watch" width={128} height={151} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.banner__product_slide}>
                                                <Image src='/Image/FirstBlock/apple-watch.png' alt="Apple-Watch" width={128} height={151} />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className={styles.banner__product_info}>
                                        <p>Умные часы Apple Watch SE 40 мм <br /> Aluminium Case, серебристый/синий омут</p>
                                        <Image src='/Image/FirstBlock/reviews.png' alt="Reviews" width={73} height={12} />
                                        <div className={styles.product_info_subtitle}>
                                            <div>
                                                <p>33 990 ₽</p>
                                                <h2>31 990 ₽</h2>
                                            </div>
                                            <div>
                                                <button>Купить</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className={styles.catalog__block}>
                        <div className={styles.catalog__card_items}>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Смартфоны</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Планшеты</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Ноутбуки</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Наушники</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Смарт-часы</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                            <div className={styles.catalog__card}>
                                <div className={styles.card__cirsle}></div>
                                <p>Аксессуары</p>
                                <div>
                                    <Image src='/Image/FirstBlock/catalog-smartfon.png' alt="Smartfon" width={123} height={135} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;