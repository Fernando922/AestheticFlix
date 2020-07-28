import React from "react";
import Logo from "../../assets/img/devflix.png";
import "./Menu.css";
import Button from "../Button";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="DevFlix logo" className="Logo" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
}
