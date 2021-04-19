import Logo from "../logo.svg";

import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col m6 offset-m3">
            <img src={Logo} alt="Rick and Morty" style={{width:'100%'}}/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
