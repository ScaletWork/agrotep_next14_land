"use client";

import { FC } from "react";
import Image from "next/image";
import { ServiceItem, serviceLists } from "@/pages/AutoPark/constant";
import Slider from "@/components/autopark/Slider";

const AutoPark: FC = () => {
  const renderServiceBlock = (
    swap: boolean = false,
    serviceItem: ServiceItem,
    index: number
  ) => {
    return (
      <div className={`service__block service__block_${index}`} key={index}>
        <h3>
          <span>{serviceItem.count}</span> {serviceItem.link}
        </h3>
        <div
          className={`service__wrapper ${
            swap ? "service__wrapper_reverse" : ""
          }`}
        >
          <ul className="service__list">
            {serviceItem.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Image width={500} height={500} src={serviceItem.img} alt="" />
        </div>
      </div>
    );
  };

  return (
    <div className="autopark">
      <div className="autopark__img">
        <h1>Послуги</h1>
      </div>
      <section className="service">
        {renderServiceBlock(false, serviceLists.first, 1)}
        {renderServiceBlock(true, serviceLists.second, 2)}
        {renderServiceBlock(false, serviceLists.third, 3)}
      </section>

      <section className="info">
        <div className="info__wrapper">
          <div className="info__block">
            <div className="info__text">
              <h2>Сто налічує</h2>
              <span> 12 </span>
              <h2>ремонтних майданчиків</h2>
            </div>
            <Slider
              images={[
                "/img/autopark/slider-images/1.jpg",
                "/img/autopark/slider-images/1.jpg",
              ]}
              width={541}
              height={535}
              text="Трали"
            />
          </div>
          <div className="info__block">
            <Slider
              images={[
                "/img/autopark/slider-images/1.jpg",
                "/img/autopark/slider-images/1.jpg",
              ]}
              width={541}
              height={535}
              text="Трали"
            />
            <div className="info__text">
              <h2>Ремзона з</h2>
              <span> 4 </span>
              <h2>видами спецтранспорту</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="agrotepClass">
        <div className="agrotepClass__block">
          <h2>Навчальний клас &quot;АГРОТЕП&quot;</h2>
          <p>
            ТОВ &quot;АГРОТЕП&quot; забезпечує якісну та професійну підготовку
            водіїв у власному навчальному класі. Навчання проводиться відповідно
            до затверджених програм, а також за програмою &quot;
            <span>Код 95</span>&quot;. Навчальний клас відповідає високим
            стандартам якості та безпеки, що передбачає навчання на найвищому
            рівні. Інструктори навчального класу мають відповідний професійний
            досвід та кваліфікації, забезпечуючи водіїв не лише теоретичними, а
            й практичними знаннями та навичками. Ми впроваджуємо інноваційні
            методи навчання та використовуємо сучасне обладнання, чим гарантуємо
            максимальну якість та ефективність навчання.
          </p>
        </div>
        <div className="agrotepClass__block">
          <Image
            width={500}
            height={300}
            src="/img/autopark/passport1.png"
            alt=""
          />
          <Image
            width={500}
            height={300}
            src="/img/autopark/passport2.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AutoPark;
