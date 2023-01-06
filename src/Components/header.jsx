import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let navigate = useNavigate();
  const noOfItems = useSelector((state) => state.counter.noOfItems);

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
          {/* <form action="">
            <input type="search" name="search" id="search" />
            <button type="submit"></button>
          </form> */}
        </div>
        <div className="ProfileSec">
          <div onClick={() => navigate("/cart")} data-num={`${noOfItems}`}>
            <h4>Cart</h4>
          </div>
          {/* <div>
            <h4>Login/SignUp</h4>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
