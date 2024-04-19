// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useShowContext } from "../ShowProvider";
import "./Header.css";

function Header() {
  const { show, setShow } = useShowContext();

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        backgroundColor: "#060B26",
        // backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        height: "40px",
        // padding: "10px",
      }}
    >
      {show ? (
        <>
          <FontAwesomeIcon
            icon={faX}
            onClick={handleShowMenu}
            className="icon"
          />
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleShowMenu}
          className="icon"
        />
      )}
    </div>
  );
}

export default Header;
