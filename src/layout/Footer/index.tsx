"use client";

import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  const navLinks = [
    { text: t("home"), href: "/" },
    { text: t("aboutUs"), href: "/about-us" },
    { text: t("services"), href: "/services" },
    { text: t("trucks"), href: "/auto-park" },
    { text: t("careers"), href: "/careers" },
    { text: t("contactUs"), href: "/contacts" },
  ];

  const renderLinks = () => {
    return navLinks.map((link, index) => (
      <li key={index} className="footer-nav-item">
        <Link className="nav-item-link" href={link.href}>
          {link.text}
        </Link>
      </li>
    ));
  };

  return (
    <footer id="contact" style={{ backgroundColor: "#242b33" }}>
      <div className="footer-content container">
        <div className="footer-card">
          <h4 className="footer-card-title">{t("information")}</h4>
          <nav className="footer-navigation">
            <ul className="footer-nav-list">{renderLinks()}</ul>
          </nav>
        </div>
        <div className="footer-card">
          <h4 className="footer-card-title">{t("contactUs")}</h4>
          <div className="footer-card-row">
            <h5 className="card-row-title">{t("address")}:</h5>
            <p className="card-row-info">м. Київ, вул. Роберта Лісовського 8</p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">{t("phoneNumbers")}:</h5>
            <p className="card-row-info">+ 38 (050) 449 52 71</p>
            <p className="card-row-info">+ 38 (050) 206 64 50</p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">{t("email")}:</h5>
            <p className="card-row-info">ua@agrotep.com</p>
            <p className="card-row-info">agrotep@agrotep.com</p>
          </div>
        </div>
        <div className="footer-card">
          <h4 className="footer-card-title">{t("socialMedia")}</h4>
          <div className="footer-socials">
            <a href="" className="social-link youtube"></a>
            <a href="" className="social-link facebook"></a>
            <a href="" className="social-link instagram"></a>
            <a href="" className="social-link linkedin"></a>
          </div>
          <a className="logo" href="index.html">
            <img className="logo-img" src="/img/main/logo.svg" alt="" />
            <img className="logo-text" src="/img/main/White_text3.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
