"use client";

import { pageSequence } from "@/utils/constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import throttle from "lodash/throttle";

const Footer: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [hasNavigated, setHasNavigated] = useState(false);

  const autoNavigatePages = [
    "/",
    "/about-us",
    "/services",
    "/auto-park",
    "/careers",
    "/contacts",
  ];

  const handleScroll = useCallback(
    throttle(() => {
      if (!autoNavigatePages.includes(pathname)) {
        return;
      }

      if (hasNavigated) {
        return;
      }

      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        const nextPath = pageSequence[pathname];
        if (nextPath) {
          console.log(`Переход на следующий путь: ${nextPath}`);
          setHasNavigated(true);
          router.push(nextPath);
        } else {
          console.log("Следующий путь не найден в pageSequence");
        }
      }
    }, 200), // Ограничиваем вызов обработчика раз в 200ms
    [pathname, router, autoNavigatePages, hasNavigated]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Добавлен слушатель события scroll");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Удалён слушатель события scroll");
    };
  }, [handleScroll]);

  // Сброс флага при смене страницы
  useEffect(() => {
    setHasNavigated(false);
  }, [pathname]);

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
            <p className="card-row-info">{t("address_text")}</p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">{t("phoneNumbers")}:</h5>
            <p className="card-row-info">+ 38 (050) 449 52 71</p>
            <p className="card-row-info">+ 38 (050) 206 64 50</p>
          </div>
          <div className="footer-card-row">
            <h5 className="card-row-title">{t("email2")}:</h5>
            <p className="card-row-info">ua@agrotep.com</p>
            <p className="card-row-info">agrotep@agrotep.com</p>
          </div>
        </div>
        <div className="footer-card">
          <h4 className="footer-card-title">{t("socialMedia")}</h4>
          <div className="footer-socials">
            <a
              href="https://www.youtube.com/@agrotep6651/community"
              target="_blank"
              className="social-link youtube"
            ></a>
            <a
              href="https://www.facebook.com/agrotep/?locale=uk_UA"
              target="_blank"
              className="social-link facebook"
            ></a>
            <a
              href="https://www.instagram.com/agrotep_ltd/"
              target="_blank"
              className="social-link instagram"
            ></a>
            <a
              href="https://ua.linkedin.com/company/agrotep"
              target="_blank"
              className="social-link linkedin"
            ></a>
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
