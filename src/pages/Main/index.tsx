import LocationsForm from "@/components/main/LocationsForm";
import { FC } from "react";

const Main: FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">
            Leading in international refrigerated transportation
          </h1>
          <button className="hero-btn">Get a consultation</button>
          <div className="hero-advant">
            <div className="advant-item">
              <img className="advant-item-icon" src="/svg/price.svg" alt="" />
              <span className="advant-item-text">
                Competent pricing policy{" "}
              </span>
            </div>
            <div className="advant-item">
              <img className="advant-item-icon" src="/svg/exp.svg" alt="" />
              <span className="advant-item-text">
                Over 30 years of experience
              </span>
            </div>
            <div className="advant-item">
              <img className="advant-item-icon" src="/svg/lider.svg" alt="" />
              <span className="advant-item-text">Market leaders</span>
            </div>
          </div>
        </div>
      </section>
      <section className="history">
        <div className="history-container">
          <p className="history-text">
            &quot;AGROTEP&quot; LTD is a leader in regular freight
            transportation across Ukraine, the EU, and Asia countries since
            1993. Continuous fleet renewal and the implementation of innovative
            logistics technologies ensure reliability and timely deliveries.We
            provide consistently high-quality services for our partners.
          </p>
          <div className="history-img-bg"></div>
        </div>
      </section>
      <section className="experience">
        <div className="exp-bg">
          <div className="exp-bg-content">
            <span className="exp-bg-text">Quality</span>
            <span className="exp-bg-text">Speed</span>
            <span className="exp-bg-text">Reliable</span>
          </div>
          <div className="exp-years">
            <span className="exp-years-img exp-3d">30</span>
            <span className="exp-years-text exp-years-img2 exp-3d">
              Years of experience
            </span>
          </div>
        </div>
      </section>
      <LocationsForm />
    </>
  );
};

export default Main;
