import React from "react";
import Logo from "../../assets/img/devflix.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="DevFlix logo" className="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}
