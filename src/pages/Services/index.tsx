"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { servicesLists } from "./constant";

const ServicesComponent: FC = () => {
  const renderServiceList = (servicesList: string[]) => {
    return servicesList.map((service, index) => <li key={index}>{service}</li>);
  };

  return (
    <div className="services">
      <section className="services-main">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="services-main__overlay"></div>
            <Image
              width={200}
              height={200}
              src={"/img/services/main_bg.jpg"}
              alt={`Slide`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="services-main__overlay"></div>
            <Image
              width={200}
              height={200}
              src={"/img/services/main_bg.jpg"}
              alt={`Slide`}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="services-info">
        <div className="services-info__header">
          <Image
            width={200}
            height={200}
            src={"/img/services/main_bg2.png"}
            alt={`Slide`}
          />
          <h2>250</h2>
          <h3>Trucks</h3>
        </div>
        <div className="services-info__list">
          <ul>{renderServiceList(servicesLists.first)}</ul>
          <ul>{renderServiceList(servicesLists.second)}</ul>
        </div>
        <div className="services-info__numbers">
          <h3>Про нас у цифрах</h3>
          <ul>
            <li>
              <span>
                13000<b>+</b>
              </span>
              <span>виконаних замовлень</span>
            </li>
            <li>
              <span>
                7<b>+</b>
              </span>
              <span>років досвіду</span>
            </li>
            <li>
              <span>
                750<b>+</b>
              </span>
              <span>авто у партнерській мережі</span>
            </li>
            <li>
              <span>
                450<b>+</b>
              </span>
              <span>постійних Клієнтів</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ServicesComponent;
