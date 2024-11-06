"use client";

import { FC, useState } from "react";

const ContactForm: FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
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
      console.error("Error!", error.message);
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
              Request Calculation
            </legend>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              className="input"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="input"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name *"
              className="input"
              required
            />
          </div>
          <div className="address-info">
            <div className="address">
              <legend className="form-legend">Loading Address</legend>
              <input
                type="text"
                name="upload-location"
                placeholder="Loading Place"
                className="input"
              />
              <input
                type="text"
                name="customs-clearance-start"
                placeholder="Customs Clearance Place"
                className="input"
              />
            </div>
            <div className="address">
              <legend className="form-legend">Unloading Address</legend>
              <input
                type="text"
                name="unload-location"
                placeholder="Unloading Place"
                className="input"
              />
              <input
                type="text"
                name="customs-clearance-end"
                placeholder="Customs Clearance Place"
                className="input"
              />
            </div>
          </div>
          <div className="additionally-info">
            <legend className="form-legend">Cargo Information</legend>
            <input
              type="text"
              name="cargo-information"
              placeholder="Cargo Type"
              className="input"
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              className="input"
            />
            <select name="truck-type" className="input">
              <option value="">Select Trailer Type</option>
              <option value="tent">Tent</option>
              <option value="ref">Refrigerator</option>
              <option value="any">Any</option>
            </select>
            <input type="date" name="date" className="input" />
            <textarea
              name="message"
              placeholder="Additional Information"
              className="comment"
            ></textarea>
          </div>
          <button
            className="request-btn"
            type="submit"
            style={{ cursor: "pointer" }}
          >
            SEND REQUEST
          </button>
        </form>
        {loading && <div className="loader"></div>}
        {thankYouVisible && (
          <div className="feedback-thanks show">
            Thank you for your request!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
