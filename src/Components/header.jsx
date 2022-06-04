import React from "react";
import "./header.css";

const Header = () => {
  // const [serachedItem, setItem] = useState("");
  return (
    <>
      <header>
        <div className="LogoSec">
          <h1>
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
          <h4>Cart</h4>
          <h4>Login/SignUp</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
