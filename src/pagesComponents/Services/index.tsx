"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Импортируем framer-motion
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

interface IServicesLists {
  first: string[];
  second: string[];
}

const ServicesComponent: FC = () => {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const servicesLists = {
    first: [
      t("transportationTypes"),
      t("refrigeratorAdvantages"),
      t("anyRefrigeratorList"),
    ],
    second: [
      t("transportationTypes"),
      t("refrigeratorAdvantages"),
      t("anyRefrigeratorList"),
    ],
  };

  const servicesElementsLists = [
    {
      title: t("gpsMonitoringTitle"),
      text: t("gpsMonitoringText"),
    },
    {
      title: t("fuelTitle"),
      text: t("fuelText"),
    },
    {
      title: t("technicalConditionTitle"),
      text: t("technicalConditionText"),
    },
    {
      title: t("temperatureControlTitle"),
      text: t("temperatureControlText"),
    },
  ];

  const renderServiceList = (servicesList: string[]) => {
    return servicesList.map((service, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {service}
      </motion.li>
    ));
  };

  const renderServiceElementsList = () => {
    return servicesElementsLists.map((item, i) => (
      <motion.div
        key={i}
        className={`services-elements__block services-elements__block_${i + 1}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="services-elements__overlay">
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="services">
      <section className="services-main">
        <div className="services-main__overlay"></div>
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 10000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <motion.img
              src={"/img/services/main_bg.jpg"}
              alt={t("slide")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <motion.img
              src={"/img/services/main_bg.jpg"}
              alt={t("slide")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </SwiperSlide>
        </Swiper>
        <motion.div
          className="services-main__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>{t("modernAndInnovativePark")}</h1>
          <p>{t("parkDescription")}</p>
        </motion.div>
      </section>
      <section className="services-info">
        <motion.div
          className="services-info__header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <img src={"/img/services/main_bg2.png"} alt={t("slide")} />
          <h2>250</h2>
          <h3>{t("Trucks")}</h3>
        </motion.div>
        <motion.div
          className="services-info__list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <ul>{renderServiceList(servicesLists.first)}</ul>
          <ul>{renderServiceList(servicesLists.second)}</ul>
        </motion.div>
        <motion.div
          className="services-info__numbers"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3>{t("aboutUsInNumbers")}</h3>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              ref={ref}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <span>
                {inView && (
                  <CountUp
                    startOnMount={false}
                    delay={2}
                    start={0}
                    end={13000}
                    duration={2}
                    separator=" "
                  />
                )}
                <b>+</b>
              </span>
              <span>{t("completedOrders")}</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <span>
                {inView && (
                  <CountUp
                    startOnMount={false}
                    delay={2}
                    start={0}
                    end={7}
                    duration={2}
                    separator=" "
                  />
                )}
                <b>+</b>
              </span>
              <span>{t("yearsOfExperience")}</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              viewport={{ once: true }}
            >
              <span>
                {inView && (
                  <CountUp
                    startOnMount={false}
                    delay={2}
                    start={0}
                    end={750}
                    duration={2}
                    separator=" "
                  />
                )}
                <b>+</b>
              </span>
              <span>{t("partnerNetworkVehicles")}</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              viewport={{ once: true }}
            >
              <span>
                {inView && (
                  <CountUp
                    startOnMount={false}
                    delay={2}
                    start={0}
                    end={450}
                    duration={2}
                    separator=" "
                  />
                )}
                <b>+</b>
              </span>
              <span>{t("loyalClients")}</span>
            </motion.li>
          </ul>
        </motion.div>
      </section>
      <section className="services-elements">
        {renderServiceElementsList()}
      </section>
      <motion.img
        className="services-footer-bg"
        src="/img/services/footer_bg.jpg"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default ServicesComponent;
