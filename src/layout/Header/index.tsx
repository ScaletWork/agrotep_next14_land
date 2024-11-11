"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/main/ContactForm";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(-1);
  const [activeLang, setActiveLang] = useState("UA");
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  console.log(isLargeScreen);

  const navLinks = [
    { text: t("home"), href: "/" },
    { text: t("aboutUs"), href: "/about-us" },
    { text: t("services"), href: "/services" },
    { text: t("trucks"), href: "/auto-park" },
    { text: t("careers"), href: "/careers" },
    { text: t("contactUs"), href: "/contacts" },
  ];

  const toggleModal = () => setModalOpen((prev) => !prev);

  const handleLanguageSwitch = (
    e: React.MouseEvent<HTMLAnchorElement>,
    lang: string
  ) => {
    e.preventDefault();
    i18n.changeLanguage(lang === "UA" ? "uk" : "en");
    setActiveLang(lang);
    localStorage.setItem("activeLang", lang);
  };

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
    document.body.classList.toggle("no-scroll", !isNavVisible);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("activeLang");
    console.log(storedLang);
    if (storedLang) {
      setActiveLang(storedLang);
      setTimeout(() => {
        i18n.changeLanguage(storedLang === "UA" ? "uk" : "en");
      }, 100);
    }
  }, [i18n]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(
        !window.innerWidth ? -1 : window.innerWidth >= 1051 ? 1 : 0
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoVariant1 = {
    hidden: { y: -175, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const logoVariant2 = {
    hidden: { y: -175, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, delay: 0.4 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, staggerChildren: 0.2, delay: 0.2 },
    },
  };

  const langButtonVariants = {
    active: {
      scale: 1.2,
      backgroundColor: "#eff3f3",
      color: "#f2cd00",
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    inactive: {
      scale: 1,
      backgroundColor: "transparent",
      color: "#fff",
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  return (
    <header>
      <div className="container header">
        <Link className="logo" href="/">
          <motion.img
            className="logo-img"
            src="/img/main/logo.svg"
            alt=""
            initial="hidden"
            animate="visible"
            variants={logoVariant1}
          />
          <motion.img
            className="logo-text"
            src="/img/main/White_text3.png"
            alt=""
            initial="hidden"
            animate="visible"
            variants={logoVariant2}
          />
        </Link>
        <div className="navigation-container">
          {isLargeScreen === 1 ? (
            <motion.nav
              className={`navigation ${isNavVisible ? "show-nav" : ""}`}
              initial="hidden"
              animate={isLargeScreen || isNavVisible ? "visible" : "hidden"}
              variants={navItemVariants}
            >
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <motion.li
                    className="nav-item"
                    key={link.text}
                    variants={navItemVariants}
                  >
                    <Link href={link.href} className="nav-item-link">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ) : isLargeScreen === 0 ? (
            <div className={`navigation ${isNavVisible ? "show-nav" : ""}`}>
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <motion.li
                    className="nav-item"
                    key={link.text}
                    variants={navItemVariants}
                    onClick={toggleNav}
                  >
                    <Link href={link.href} className="nav-item-link">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
          <motion.button
            className="nav-request-btn extra-top extra-bottom"
            onClick={toggleModal}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
          >
            <span className="nav-request-line"></span>
            {t("transportation_calculation")}
          </motion.button>
          <ContactForm isOpen={isModalOpen} onClose={toggleModal} />
          <motion.div
            className="lang-menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
          >
            <motion.a
              href="#"
              className="lang"
              variants={langButtonVariants}
              animate={activeLang === "UA" ? "active" : "inactive"}
              onClick={(e) => handleLanguageSwitch(e, "UA")}
            >
              <span>UA</span>
            </motion.a>
            <motion.a
              href="#"
              className="active-lang lang"
              variants={langButtonVariants}
              animate={activeLang === "EN" ? "active" : "inactive"}
              onClick={(e) => handleLanguageSwitch(e, "EN")}
            >
              <span>EN</span>
            </motion.a>
          </motion.div>
          <div
            className={`burger-menu ${isNavVisible ? "active" : ""}`}
            onClick={toggleNav}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
