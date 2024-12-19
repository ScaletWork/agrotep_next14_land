"use client";

import { motion } from "framer-motion";
import { FC, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec";

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ContactsComponent: FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const formContact = formRef.current;

    if (formContact) {
      const handleSubmit = (e: Event) => {
        e.preventDefault();

        fetch(scriptURL, { method: "POST", body: new FormData(formContact) })
          .then(() => {
            formContact.reset();
            setShowThanks(true);
            setTimeout(() => {
              setShowThanks(false);
            }, 4000);
          })
          .catch((error) => console.error("Error!", error.message));
      };

      formContact.addEventListener("submit", handleSubmit);

      return () => {
        formContact.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <section className="contacts" id="contacts">
      <div className="contact-info-wrapper container">
        <motion.div
          className="contact-info"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="contact-info-phone contact-info-block">
            <img
              src="/img/contacts/contact-phone.svg"
              alt=""
              className="contact-img"
            />
            <div className="contact-info-wrap">
              <h4 className="contact-info-title">{t("phoneNumberTitle")}</h4>
              <span className="contact-info-content">+380504495271</span>
              <span className="contact-info-content">+380502066450</span>
            </div>
          </div>
          <div className="contact-info-mail contact-info-block">
            <img
              src="/img/contacts/contact-mail.svg"
              alt=""
              className="contact-img"
            />
            <div className="contact-info-wrap">
              <h4 className="contact-info-title">{t("emailTitle")}</h4>
              <span className="contact-info-content">ua@agrotep.com</span>
              <span className="contact-info-content">agrotep@agrotep.com</span>
            </div>
          </div>
          <div className="contact-info-adress contact-info-block">
            <img
              src="/img/contacts/contact-adress.svg"
              alt=""
              className="contact-img"
            />
            <div className="contact-info-wrap">
              <h4 className="contact-info-title">{t("addressTitle")}</h4>
              <span className="contact-info-content">{t("address_text")}</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="contact-form"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <form
            ref={formRef}
            action=""
            method=""
            className="modal-form-back"
            name="submit-to-google-sheet-contact"
          >
            <div className="about-info-back">
              <legend className="form-legend-back form-legend-title-back">
                {t("contactUsPage")}
              </legend>
              <input
                type="text"
                name="name"
                placeholder={t("namePlaceholder")}
                className="input-back"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder={t("phonePlaceholder")}
                className="input-back"
                required
              />
              <input
                type="text"
                name="company"
                placeholder={t("subjectPlaceholder")}
                className="input-back"
              />
            </div>
            <textarea
              name="message"
              placeholder={t("additionalInfoPlaceholder")}
              className="comment-back"
              required
            ></textarea>
            <button className="request-btn-back" type="submit">
              {t("contactButton")}
            </button>
          </form>
          <div className="contact-form-img-container">
            <img
              className="contact-form-img"
              src="/img/contacts/contact-us.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      {showThanks && (
        <span className="feedback-thanks">
          <img
            src="img/main/done.svg"
            alt=""
            style={{ width: 40, marginRight: 10 }}
          />
          {t("feedbackThanks")}
        </span>
      )}
    </section>
  );
};

export default ContactsComponent;
