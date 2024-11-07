"use client";

import LocationsForm from "@/components/main/LocationsForm";
import { FC } from "react";
import { motion } from "framer-motion";

const Main: FC = () => {
  const heroTitleVariants = {
    hidden: { y: -175, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const advantItemVariants = {
    hidden: { x: 140, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, staggerChildren: 0.2 },
    },
  };

  const historyTextVariants = {
    hidden: { x: 140, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

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

  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={heroTitleVariants}
          >
            Leading in international refrigerated transportation
          </motion.h1>
          <motion.button
            className="hero-btn"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Get a consultation
          </motion.button>
          <div className="hero-advant">
            {[
              "Competent pricing policy",
              "Over 30 years of experience",
              "Market leaders",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="advant-item"
                initial="hidden"
                animate="visible"
                variants={advantItemVariants}
              >
                <img
                  className="advant-item-icon"
                  src={`/svg/icon${index + 1}.svg`}
                  alt=""
                />
                <span className="advant-item-text">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="history">
        <motion.div
          className="history-container"
          initial="hidden"
          whileInView="visible"
          variants={historyTextVariants}
        >
          <p className="history-text">
            &quot;AGROTEP&quot; LTD is a leader in regular freight
            transportation across Ukraine, the EU, and Asia countries since
            1993. Continuous fleet renewal and the implementation of innovative
            logistics technologies ensure reliability and timely deliveries. We
            provide consistently high-quality services for our partners.
          </p>
          <div className="history-img-bg"></div>
        </motion.div>
      </section>
      <section className="experience">
        <div className="exp-bg">
          <motion.div
            className="exp-bg-content"
            initial="hidden"
            whileInView="visible"
            variants={expBgTextVariants}
          >
            <span className="exp-bg-text">Quality</span>
            <span className="exp-bg-text">Speed</span>
            <span className="exp-bg-text">Reliable</span>
          </motion.div>
          <motion.div
            className="exp-years"
            initial="hidden"
            whileInView="visible"
            variants={exp3dVariants}
          >
            <span className="exp-years-img exp-3d">30</span>
            <span className="exp-years-text exp-years-img2 exp-3d">
              Years of experience
            </span>
          </motion.div>
        </div>
      </section>
      <LocationsForm />
    </>
  );
};

export default Main;
