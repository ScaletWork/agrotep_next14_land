"use client";

import { FC, useEffect, useState } from "react";
import { gsap } from "gsap";
import ContactForm from "@/components/main/ContactForm";
import Link from "next/link";
import { navLinks } from "@/utils/constant";

const Header: FC = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const toggleNav = () => {
    setNavVisible((prev) => !prev);
    document.body.classList.toggle("no-scroll", !isNavVisible);
  };

  // useEffect(() => {
  //   const heroTl = gsap.timeline();
  //   heroTl
  //     .from(".logo-img", {
  //       yPercent: -175,
  //       opacity: 0,
  //       duration: 1.2,
  //     })
  //     .from(".logo-text", {
  //       yPercent: -175,
  //       opacity: 0,
  //       duration: 1.2,
  //       delay: -0.7,
  //     })
  //     .from(".nav-item", {
  //       opacity: 0,
  //       xPercent: 100,
  //       stagger: 0.2,
  //       duration: 0.9,
  //     })
  //     .from(".nav-request-btn", {
  //       opacity: 0,
  //       xPercent: 100,
  //       duration: 0.9,
  //       delay: -0.5,
  //     })
  //     .from(".lang-menu", {
  //       opacity: 0,
  //       xPercent: 100,
  //       duration: 0.9,
  //       delay: -0.5,
  //     });
  // }, []);

  return (
    <header>
      <div className="container header">
        <Link className="logo" href="/">
          <img className="logo-img" src="/svg/logo.svg" alt="" />
          <img className="logo-text" src="/img/White_text3.png" alt="" />
        </Link>
        <div className="navigation-container">
          <nav className={`navigation ${isNavVisible ? "show-nav" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.text}>
                  <Link href={link.href} className="nav-item-link">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="nav-request-btn extra-top extra-bottom"
            onClick={toggleModal}
          >
            <span className="nav-request-line"></span>
            Transportation Calculation
          </button>
          <ContactForm isOpen={isModalOpen} onClose={toggleModal} />
          <div className="lang-menu">
            <Link href="/" className="lang">
              <span>UA</span>
            </Link>
            <Link href="/" className="active-lang lang">
              <span>EN</span>
            </Link>
          </div>
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
