import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Transition } from "react-transition-group";

export default function Sidebar(props) {
  return (
    <Transition in={props.in} timeout={1000}>
      {(state) => (
        <aside className={`flex-center slide-${state}`}>
          <AiOutlineClose className="icon" onClick={props.close} />
          <ul className="sideMenu">
            <li className="flex-center">
              <Link to="about" duration={1000} smooth={true} spy={true} onClick={props.close}>About</Link>
            </li>
            <li className="flex-center">
              <Link to="discover" duration={1000} smooth={true} spy={true} onClick={props.close}>Discover</Link>
            </li>
            <li className="flex-center">
              <Link to="services"  duration={1000} smooth={true} spy={true} onClick={props.close}>Services</Link>
            </li>
            <li className="flex-center">
              <Link to="signup" duration={1000} smooth={true} spy={true} onClick={props.close}>Sign Up</Link>
            </li>
          </ul>
          <button>
            <NavLink to="signup">Sign In</NavLink>
          </button>
        </aside>
      )}
    </Transition>
  );
}
