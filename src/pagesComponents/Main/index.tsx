"use client";

import LocationsForm from "@/components/main/LocationsForm";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/main/ContactForm";
import useFormattedText from "@/hooks/useFormattedText";

const Main: FC = () => {
  const { t } = useTranslation();
  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const historyTextControls = useAnimation();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen((prev) => !prev);

  useEffect(() => {
    if (historyInView) {
      historyTextControls.start({ x: 0, opacity: 1 });
    }
  }, [historyInView, historyTextControls]);

  const expBgTextVariants = {
    hidden: { x: -275, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.6 },
    },
  };

  const exp3dVariants = {
    hidden: { x: 270, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.2, staggerChildren: 0.8 },
    },
  };
  const { text1: historyText } = useFormattedText({
    texts: [t("history_text")],
    className: "special-span-class",
  });

  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <motion.img
            src="/img/main/name.png"
            alt=""
            className="hero-name"
            initial={{ y: "-175%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.h1
            className="hero-title"
            initial={{ y: "-175%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {t("hero_title")}
          </motion.h1>
          <motion.button
            className="hero-btn"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            onClick={toggleModal}
          >
            {t("consultation_button")}
          </motion.button>
        </div>
      </section>

      <section className="history">
        <div className="history-container" ref={historyRef}>
          <motion.p
            className="history-text"
            initial={{ x: "140%", opacity: 0 }}
            animate={historyTextControls}
            transition={{ duration: 1.2 }}
          >
            {historyText}
          </motion.p>
          <div className="history-img-bg"></div>
        </div>
      </section>

      <section className="experience">
        <div className="exp-bg">
          <motion.div
            className="exp-bg-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={expBgTextVariants}
          >
            <span className="exp-bg-text">{t("experience_quality")}</span>
            <span className="exp-bg-text">{t("experience_speed")}</span>
            <span className="exp-bg-text">{t("experience_reliable")}</span>
          </motion.div>
          <motion.div
            className="exp-years"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={exp3dVariants}
          >
            <span className="exp-years-img exp-3d">30</span>
            <span className="exp-years-text exp-years-img2 exp-3d">
              {t("experience_years")}
            </span>
          </motion.div>
        </div>
      </section>
      <LocationsForm />
      <ContactForm isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Main;
