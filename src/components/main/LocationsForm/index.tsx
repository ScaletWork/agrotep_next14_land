"use client";

import { FC, useState } from "react";

const LocationsForm: FC = () => {
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
      <img src="/img/main/map.jpg" alt="" className="location-map" />
      <form
        onSubmit={handleSubmit}
        className="modal-form location-form"
        name="submit-to-google-sheet-contact"
      >
        <div className="about-info">
          <legend className="form-legend form-legend-title location-legend">
            Розкажіть про вантаж — ми знайдемо рішення!
          </legend>
          <input
            type="text"
            name="name"
            placeholder="Ім'я *"
            className="input location-input"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Номер телефону *"
            className="input location-input"
            required
          />

          <input
            type="text"
            name="upload-location"
            placeholder="Місце завантаження"
            className="input location-input"
          />
          <input
            type="text"
            name="unload-location"
            placeholder="Місце розвантаження"
            className="input location-input"
          />
        </div>
        <textarea
          name="message"
          placeholder="Додаткова інформація"
          className="comment location-comment"
          required
        ></textarea>
        <button className="request-btn" type="submit" disabled={loading}>
          {loading ? "Відправляється..." : "Зв'язатись"}
        </button>
        {thankYouVisible && (
          <div className="feedback-thanks show">
            <img
              src="/img/main/done.svg"
              alt=""
              style={{ width: 40, marginRight: 10 }}
            />
            Request received
          </div>
        )}
      </form>
    </section>
  );
};

export default LocationsForm;
