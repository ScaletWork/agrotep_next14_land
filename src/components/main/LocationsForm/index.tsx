"use client";

import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const LocationsForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const { t } = useTranslation();
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
      setTimeout(() => {
        setThankYouVisible(false);
      }, 4000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="locations">
      <div className="locations__overlay"></div>
      <img src="/img/main/map.jpg" alt="" className="location-map" />
      <form
        onSubmit={handleSubmit}
        className="modal-form location-form"
        name="submit-to-google-sheet-contact"
      >
        <div className="about-info">
          <legend className="form-legend form-legend-title location-legend">
            {t("formTitle")}
          </legend>
          <input
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            className="input location-input"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder={t("phonePlaceholder")}
            className="input location-input"
            required
          />
          <input
            type="text"
            name="upload-location"
            placeholder={t("pickupPlaceholder")}
            className="input location-input"
          />
          <input
            type="text"
            name="unload-location"
            placeholder={t("deliveryPlaceholder")}
            className="input location-input"
          />
        </div>
        <textarea
          name="message"
          placeholder={t("additionalInfoPlaceholder")}
          className="comment location-comment"
          required
        ></textarea>
        <button className="request-btn" type="submit" disabled={loading}>
          {loading ? t("loadingButton") : t("submitButton")}
        </button>
        {thankYouVisible && (
          <div className="feedback-thanks show">
            <img
              src="/img/main/done.svg"
              alt=""
              style={{ width: 40, marginRight: 10 }}
            />
            {t("thankYouMessage")}
          </div>
        )}
      </form>
    </section>
  );
};

export default LocationsForm;
