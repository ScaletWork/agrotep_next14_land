"use client";

import { FC } from "react";
import Image from "next/image";
import Slider from "@/components/autopark/Slider";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  count: string;
  link: string;
  img: string;
  list: string[];
}

interface ServiceLists {
  first: ServiceItem;
  second: ServiceItem;
  third: ServiceItem;
}

const AutoParkComponent: FC = () => {
  const { t } = useTranslation();

  const serviceLists: ServiceLists = {
    first: {
      count: "250",
      link: t("serviceFirstLink"),
      img: "/img/autopark/truck1.png",
      list: [
        t("serviceFirstList0"),
        t("serviceFirstList1"),
        t("serviceFirstList2"),
        t("serviceFirstList3"),
      ],
    },
    second: {
      count: "50",
      link: t("serviceSecondLink"),
      img: "/img/autopark/truck2.png",
      list: [
        t("serviceSecondList0"),
        t("serviceSecondList1"),
        t("serviceSecondList2"),
        t("serviceSecondList3"),
      ],
    },
    third: {
      count: "200",
      link: t("serviceThirdLink"),
      img: "/img/autopark/truck3.png",
      list: [
        t("serviceThirdList0"),
        t("serviceThirdList1"),
        t("serviceThirdList2"),
        t("serviceThirdList3"),
      ],
    },
  };

  const transportationList = [
    t("transportationList0"),
    t("transportationList1"),
    t("transportationList2"),
  ];

  const transportationRoutesList = [
    { title: t("westernEuropeTitle"), text: t("westernEuropeText") },
    { title: t("northernEuropeTitle"), text: t("northernEuropeText") },
    { title: t("southernEuropeTitle"), text: t("southernEuropeText") },
    { title: t("easternEuropeTitle"), text: t("easternEuropeText") },
    { title: t("balkansTitle"), text: t("balkansText") },
    { title: t("asiaTitle"), text: t("asiaText") },
  ];

  const logosList = [
    "/img/autopark/logos/1.png",
    "/img/autopark/logos/2.png",
    "/img/autopark/logos/3.png",
    "/img/autopark/logos/4.png",
    "/img/autopark/logos/5.png",
    "/img/autopark/logos/6.png",
    "/img/autopark/logos/7.png",
    "/img/autopark/logos/8.png",
    "/img/autopark/logos/9.png",
  ];

  const renderServiceBlock = (
    swap: boolean = false,
    serviceItem: ServiceItem,
    index: number
  ) => {
    return (
      <motion.div
        className={`service__block service__block_${index}`}
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
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
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <Image
            style={{ transform: swap ? "scaleX(-1)" : "" }}
            width={500}
            height={500}
            src={serviceItem.img}
            alt=""
          />
        </div>
      </motion.div>
    );
  };

  const renderTransportationBlock = () => {
    return transportationList.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {item}
      </motion.li>
    ));
  };

  const renderTransportationRouteBlock = () => {
    return transportationRoutesList.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h5>{item.title}</h5>
        <div className="transportation__routes_divider">
          <div></div>
        </div>
        <div className="transportation__routes_text">
          <p>{item.text}</p>
        </div>
      </motion.li>
    ));
  };

  const renderLogosList = () => {
    return logosList.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <Image width={200} height={200} src={item} alt="" />
      </motion.li>
    ));
  };

  return (
    <div className="autopark">
      <motion.div
        className="autopark__img"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>{t("services")}</h1>
      </motion.div>
      <section className="service">
        {renderServiceBlock(false, serviceLists.first, 1)}
        {renderServiceBlock(true, serviceLists.second, 2)}
        {renderServiceBlock(false, serviceLists.third, 3)}
      </section>
      <section className="transportation">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("dangerous_transportation")}
        </motion.h3>
        <div className="transportation__header">
          <Image
            width={500}
            height={500}
            src="/img/autopark/danger.png"
            alt={t("danger_sign")}
          />
          <ul>{renderTransportationBlock()}</ul>
        </div>
        <div className="transportation__routes">
          <Image
            height={800}
            width={1200}
            src="/img/autopark/world-star.png"
            alt={t("start_globe")}
          />
          <motion.div
            className="transportation__text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4>{t("main_logistics_routes")}</h4>
            <ul>{renderTransportationRouteBlock()}</ul>
          </motion.div>
        </div>
      </section>
      <section className="logos">
        <ul>{renderLogosList()}</ul>
        <div className="logos__block">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("why_choose_us")}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("why_choose_us_description")}
          </motion.p>
        </div>
      </section>
      <section className="info">
        <motion.div
          className="info__wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="info__block">
            <motion.div
              className="info__text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t("repair_sites")}</h2>
              <span> 12 </span>
              <h2>{t("repair_sites_description")}</h2>
            </motion.div>
            <Slider
              images={[
                "/img/autopark/slider-images/1.jpg",
                "/img/autopark/slider-images/1.jpg",
              ]}
              width={541}
              height={535}
              text={t("trailers")}
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
              text={t("trailers")}
            />
            <motion.div
              className="info__text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t("repair_zone")}</h2>
              <span> 4 </span>
              <h2>{t("special_transport")}</h2>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="agrotepClass">
        <div className="agrotepClass__block">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("agrotep_class")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {t("agrotep_class_description")}
          </motion.p>
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

export default AutoParkComponent;
