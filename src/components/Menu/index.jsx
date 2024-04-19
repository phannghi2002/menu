import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useShowContext } from "../ShowProvider";

function Menu() {
  const { show } = useShowContext();

  return (
    <>
      {show && (
        <div className={`navbar ${show ? "show" : "hide"}`}>
          <ul className="navbar-wrapper">
            <NavLink to="/" className="navbar-link">
              <FontAwesomeIcon icon={faHome} className="navbar-icon" />{" "}
              <span className="navbar-title">Home</span>
            </NavLink>
            <NavLink to="/countries" className="navbar-link">
              <FontAwesomeIcon icon={faGlobe} className="navbar-icon" />{" "}
              <span className="navbar-title">Countries</span>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menu;
