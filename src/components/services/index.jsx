import { useState, useRef } from "react";
import "./style.scss";
import car from "../../images/about.svg";
import office from "../../images/office.svg";
import premium from "../../images/premium.svg";

export default function Service(props) {
  return (
    <section className="services">
      <h1 className="title">Our Services</h1>
      <div className="row">
        <div className="service">
          <img src={car} alt="" />
          <div className="content">
            <h2>Reduce expenses</h2>
            <p>We help reduce your fess and increase your overall revenue.</p>
          </div>
        </div>
        <div className="service">
          <img src={office} alt="" />
          <div className="content">
            <h2>Virtual office</h2>
            <p>You can access our platform online anywhere in the world.</p>
          </div>
        </div>
        <div className="service">
          <img src={premium} alt="" />
          <div className="content">
            <h2>Premuim benefits</h2>
            <p>Unloch our special membership card that return 5% cash back.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
