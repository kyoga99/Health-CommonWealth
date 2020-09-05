import React from "react";
import logo from './logo.png';
const Footer = () => (
  <footer className="bg-light p-3 text-center">
  	<img src={logo} width="120"/>
    <p>
      Copyright of The Health CommonWealth{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/vedavitshetty/Health-CommonWealth">
        Github
      </a>
    </p>
  </footer>
);

export default Footer;
