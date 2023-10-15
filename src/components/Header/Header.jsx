import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Residências</a>
          <a href="">Nosso valor</a>
          <a href="">Contate-nos</a>
          <a href="">Iniciar</a>
          <button className="button">
            <a href="">Contato</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
