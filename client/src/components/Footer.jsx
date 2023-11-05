import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        {/* Made with ♥️ and <b>React.js</b>. */}
        Copyright &copy; | All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
