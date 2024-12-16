"use client";

/* eslint-disable react/jsx-key */
import Logo1Svg from "@/assets/svg/AboutPage/Logo1";
import Logo2Svg from "@/assets/svg/AboutPage/Logo2";
import Logo3Svg from "@/assets/svg/AboutPage/Logo3";
import Logo4Svg from "@/assets/svg/AboutPage/Logo4";
import Logo5Svg from "@/assets/svg/AboutPage/Logo5";
import Logo6Svg from "@/assets/svg/AboutPage/Logo6";
import useFormattedText from "@/hooks/useFormattedText";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutUsComponent: FC = () => {
  const { t } = useTranslation();

  const historyData = [
    {
      year: "1993",
      description: t("historyData.1993"),
    },
    {
      year: "1997",
      description: t("historyData.1997"),
    },
    {
      year: "2004",
      description: t("historyData.2005"),
    },
    {
      year: "2012",
      description: t("historyData.2012"),
    },
    {
      year: "2013",
      description: t("historyData.2013"),
    },
    {
      year: "2015",
      description: t("historyData.2015"),
    },
    {
      year: "2023",
      description: t("historyData.2023"),
    },
  ];

  const descriptions = historyData.map((data) => data.description);
  const formattedDescriptions = useFormattedText({
    texts: descriptions,
    className: "special-span-class",
  });

  const { text1: formattedLeaderText } = useFormattedText({
    texts: [t("aboutUsInfoDescription")],
    className: "special-span-class",
  });

  const logosList = [
    t("logosList.quality"),
    t("logosList.reliability"),
    t("logosList.innovations"),
    t("logosList.clientOrientation"),
    t("logosList.leadership"),
    t("logosList.ecoResponsibility"),
  ];

  const sliderList = [
    {
      title: t("sliderList.1.title"),
      text: t("sliderList.1.text"),
      img: "/img/about/slider/1.png",
    },
    {
      title: "",
      text: t("sliderList.2.text"),
      img: "/img/about/slider/2.png",
      className: "about-us-slider__element_swap",
    },
    {
      title: "",
      text: t("sliderList.3.text"),
      img: "/img/about/slider/3.png",
    },
    {
      title: "",
      text: t("sliderList.4.text"),
      img: "/img/about/slider/4.png",
      className: "about-us-slider__element_swap center",
    },
  ];

  const logosSvgList = [
    <Logo1Svg />,
    <Logo2Svg />,
    <Logo3Svg />,
    <Logo4Svg />,
    <Logo5Svg />,
    <Logo6Svg />,
  ];

  console.log(formattedDescriptions);

  const renderHistory = () =>
    historyData.map((item, index) => (
      <motion.div
        className="about-us-history__block"
        key={index}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          {index % 2 === 0 ? (
            <p>{formattedDescriptions[`text${index + 1}`]}</p>
          ) : (
            <span className="year">{item.year}</span>
          )}
        </div>
        <div>
          {index % 2 === 0 ? (
            <span className="year">{item.year}</span>
          ) : (
            <p>{formattedDescriptions[`text${index + 1}`]}</p>
          )}
        </div>
      </motion.div>
    ));

  const renderLogos = () => {
    return logosList.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      >
        <div>{logosSvgList[i]}</div>
        <span>{item}</span>
      </motion.li>
    ));
  };

  return (
    <div className="about-us">
      <motion.section
        className="about-us-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{t("leader")}</h1>
      </motion.section>
      <motion.section
        className="about-us-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>{t("aboutUs")}</h2>
        <p>{t("aboutUsDescription")}</p>
      </motion.section>
      <motion.section
        className="about-us-history"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {renderHistory()}
      </motion.section>
      <motion.section
        className="about-us-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image
          width={500}
          height={500}
          src="/img/about/trucks.jpg"
          alt="about-us"
        />
        <div className="about-us-info__text">
          <h3>{t("aboutUsInfoTitle")}</h3>
          <p>{formattedLeaderText}</p>
        </div>
      </motion.section>
      <motion.section
        className="about-us-logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3>{t("companyPrinciples")}</h3>
        <ul>{renderLogos()}</ul>
      </motion.section>
      <motion.section
        className="about-us-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="about-us-slider__desktop">
          <Swiper
            loop
            slidesPerView={1.8}
            slidesPerGroup={1}
            spaceBetween={110}
            centeredSlides
            navigation
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {sliderList.map((src, index) => (
              <SwiperSlide
                className={`about-us-slider__element ${src.className}`}
                key={index}
              >
                <motion.img
                  src={src.img}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                />
                <div>
                  <h3>{src.title}</h3>
                  <p>{src.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="about-us-slider__mobile">
          <Swiper
            loop
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={110}
            navigation
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {sliderList.map((src, index) => (
              <SwiperSlide
                className={`about-us-slider__element ${src.className}`}
                key={index}
              >
                <motion.img
                  style={index % 2 === 0 ? { maxWidth: "80%" } : {}}
                  src={src.img}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                />
                <div>
                  <h3>{src.title}</h3>
                  <p>{src.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsComponent;
