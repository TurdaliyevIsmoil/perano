import "./style.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
export default function Button({
  to,
  active = '',
  big = false,
  children,
  darkHover = false,
  scroll = false,
}) {
  return (
    <>
      {!scroll && (
        <NavLink
          to={to}
          className={`${big ? "big" : "small"} btn-ui ${darkHover ? "dark-hover" : "light-hover"}`
          }
        >
          {children}
        </NavLink>
      )}
      {scroll && (
        <Link
          to={to}
          duration={1000}
          smooth={true}
          spy={true}
          className={`${big ? "big" : "small"} btn-ui ${
              darkHover ? "dark-hover" : "light-hover"
            }`
          }
        >
          {children}
        </Link>
      )}
    </>
  );
}
