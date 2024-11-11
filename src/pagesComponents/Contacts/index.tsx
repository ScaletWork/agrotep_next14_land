import { FC } from "react";

const ContactsComponent: FC = () => {
  return (
    <section className="contacts">
      <div className="contact-info-wrapper container">
        <div className="contact-info">
          <div className="contact-info-phone contact-info-block">
            <img
              src="/img/contacts/contact-phone.svg"
              alt=""
              className="contact-img"
            />
            <div className="contact-info-wrap">
              <h4 className="contact-info-title">Номер телофону</h4>
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
              <h4 className="contact-info-title">Електронна адреса</h4>
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
              <h4 className="contact-info-title">Адреса</h4>
              <span className="contact-info-content">
                м. Київ, вул. Роберта Лісовського 8
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form
            action=""
            method=""
            className="modal-form-back"
            name="submit-to-google-sheet-contact"
          >
            <div className="about-info-back">
              <legend className="form-legend-back form-legend-title-back">
                Залишились питання? <br />
                Зв&apos;яжіться з нами
              </legend>
              <input
                type="text"
                name="name"
                placeholder="Ім'я *"
                className="input-back"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Номер телефону *"
                className="input-back"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Тема"
                className="input-back"
              />
            </div>
            <textarea
              name="message"
              placeholder="Додаткова інформація"
              className="comment-back"
              required
            ></textarea>
            <button className="request-btn-back" type="submit">
              Зв&apos;язатись
            </button>
          </form>
          <div className="contact-form-img-container">
            <img
              className="contact-form-img"
              src="/img/contacts/contact-us.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsComponent;
