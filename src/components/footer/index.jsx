import { useState, useRef } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Footer(props) {
  return (
    <footer>
      <div className="row columns">
        <div className="column">
          <Link to="signup" className="title">About Us</Link>
          <Link to="signup" className="item">How it works</Link>
          <Link to="signup" className="item">Testimonials</Link>
          <Link to="signup" className="item">careers</Link>
          <Link to="signup" className="item">Investors</Link>
          <Link to="signup" className="item">Term of service</Link>
        </div>
        <div className="column">
          <Link to="signup" className="title">Videos</Link>
          <Link to="signup" className="item">Submit videos</Link>
          <Link to="signup" className="item">Ambassadors</Link>
          <Link to="signup" className="item">Agency</Link>
          <Link to="signup" className="item">Influenser</Link>
        </div>
        <div className="column">
          <Link to="signup" className="title">Contact Us</Link>
          <Link to="signup" className="item">Contact</Link>
          <Link to="signup" className="item">Support</Link>
          <Link to="signup" className="item">Destinations</Link>
          <Link to="signup" className="item">Sponsorships</Link>
        </div>
        <div className="column">
          <Link to="signup" className="title">Social media</Link>
          <Link to="signup" className="item">Instagram</Link>
          <Link to="signup" className="item">Facebook</Link>
          <Link to="signup" className="item">Youtube</Link>
          <Link to="signup" className="item">Twitter</Link>
        </div>
      </div>
      <div className="row footer">
          <div className="logo">perano</div>
          <p>perano © 2021. All right reserved.</p>
          <div className="social-media">
              <a href="#" ><FaTelegram /></a>
              <a href="#" ><FaInstagram /></a>
              <a href="#" ><FaYoutube /></a>
          </div>
      </div>
    </footer>
  );
}
