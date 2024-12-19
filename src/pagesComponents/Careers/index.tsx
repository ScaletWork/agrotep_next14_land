"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CareersComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="careers-page" id="careers">
      <motion.section
        className="career"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="career-hero">
          <div className="career-content">
            <h1 className="career-hero-title">{t("career.heroTitle")}</h1>
            <p className="career-hero-descript">
              {t("career.heroDescription")}
            </p>
          </div>
        </div>
      </motion.section>
      <section className="career-job">
        <div className="career-info">
          <motion.div
            className="career-driver"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="driver-title">{t("career.driverTitle")}</h3>
            <p className="driver-descript">{t("career.driverDescription")}</p>
          </motion.div>

          <motion.div
            className="career-service"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="service-title">{t("career.serviceTitle")}</h3>
            <p className="service-descript">{t("career.serviceDescription")}</p>
          </motion.div>
        </div>

        <motion.div
          className="career-advantages"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="career-advantages-title">
            {t("career.advantagesTitle")}
          </h4>
          <ul>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t("career.advantage1")}
            </motion.li>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t("career.advantage2")}
            </motion.li>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {t("career.advantage3")}
            </motion.li>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {t("career.advantage4")}
            </motion.li>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {t("career.advantage5")}
            </motion.li>
            <motion.li
              className="career-advantages-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {t("career.advantage6")}
            </motion.li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default CareersComponent;
