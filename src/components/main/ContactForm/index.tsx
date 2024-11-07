"use client";

import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxU6W56jKgJqc7LY53iq0Jj5Wr3SUQH5KQro9lRTNkBmFLZNm6x_nvFWsGL-r91tfwu/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setThankYouVisible(true);
      form.reset();
      onClose(); // Закрываем модал после успешной отправки

      // Скрываем сообщение через 4 секунды
      setTimeout(() => {
        setThankYouVisible(false);
      }, 4000);
    } catch (error) {
      console.error("Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`modal ${isOpen ? "show" : "hide"}`} onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal-btn" onClick={onClose}>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <form
          name="submit-to-google-sheet"
          className="modal-form"
          onSubmit={handleSubmit}
        >
          <div className="about-info">
            <legend className="form-legend form-legend-title">
              {t("request_calculation")}
            </legend>
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              className="input"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder={t("phone")}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder={t("email")}
              className="input"
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t("company")}
              className="input"
              required
            />
          </div>
          <div className="address-info">
            <div className="address">
              <legend className="form-legend">{t("loading_address")}</legend>
              <input
                type="text"
                name="upload-location"
                placeholder={t("upload_location")}
                className="input"
              />
              <input
                type="text"
                name="customs-clearance-start"
                placeholder={t("customs_clearance_start")}
                className="input"
              />
            </div>
            <div className="address">
              <legend className="form-legend">{t("unloading_address")}</legend>
              <input
                type="text"
                name="unload-location"
                placeholder={t("unload_location")}
                className="input"
              />
              <input
                type="text"
                name="customs-clearance-end"
                placeholder={t("customs_clearance_end")}
                className="input"
              />
            </div>
          </div>
          <div className="additionally-info">
            <legend className="form-legend">{t("cargo_information")}</legend>
            <input
              type="text"
              name="cargo-information"
              placeholder={t("cargo_type")}
              className="input"
            />
            <input
              type="number"
              name="weight"
              placeholder={t("weight")}
              className="input"
            />
            <select name="truck-type" className="input">
              <option value="">{t("select_trailer")}</option>
              <option value="tent">{t("tent")}</option>
              <option value="ref">{t("ref")}</option>
              <option value="any">{t("any")}</option>
            </select>
            <input type="date" name="date" className="input" />
            <textarea
              name="message"
              placeholder={t("additional_information")}
              className="comment"
            ></textarea>
          </div>
          <button
            className="request-btn"
            type="submit"
            style={{ cursor: "pointer" }}
          >
            {t("send_request")}
          </button>
        </form>
        {loading && <div className="loader"></div>}
        {thankYouVisible && (
          <div className="feedback-thanks show">{t("thank_you")}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
