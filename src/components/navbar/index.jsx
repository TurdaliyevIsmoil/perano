import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaAlignRight } from "react-icons/fa";
import "./style.scss";
import Button from "../../ui/button";
export default function Navbar({ open }) {
  const [navScroll, setnavColor] = useState(false)
  const scrollHandler = () => {
    setnavColor(()=>window.scrollY >= 80 ? true : false)
  }
  useEffect(() => {
    window.addEventListener('scroll',scrollHandler)
  }, []);
  return (
    <nav className={navScroll ? "bg-dark" : 'bg-transparent'}>
      <div className="row flex-center">
        <Link to="home" smooth={true} spy={false} duration={1000} className="logo flex-center">perano</Link>
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              spy={true}
              duration={1000}
              activeClass="active"
              offset={-80}
              exact={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="discover"
              smooth={true}
              spy={true}
              duration={1000}
              activeClass="active"
              offset={-80}
              exact={true}
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              spy={true}
              duration={1000}
              activeClass="active"
              offset={-80}
              exact={true}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              smooth={true}
              spy={true}
              duration={1000}
              activeClass="active"
              offset={-80}
              exact={true}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="mobile-icon flex-center">
          <FaAlignRight onClick={open} />
        </div>
        <button className="flex-center">
          <Button to="signup" active="active" big={false}>
            Sign In
          </Button>
        </button>
      </div>
    </nav>
  );
}
