import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <header>
        <div className="LogoSec">
          <h1 onClick={() => navigate("/")}>
            <span style={{ color: "#efc84a" }}>Sab.</span>
            <span style={{ color: "green" }}>Kuch.</span>
          </h1>
        </div>
        <div className="SerachSec">
          <form action="">
            <input type="search" name="search" id="search" />
            <button type="submit"></button>
          </form>
        </div>
        <div className="ProfileSec">
          <h4 onClick={() => navigate("/cart")}>Cart</h4>
          <h4>Login/SignUp</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
