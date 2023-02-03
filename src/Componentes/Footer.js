import React from "react";
import "./Footer.css";

const Footer = () => {
    const ano = new Date().getFullYear();

    return <footer><p>Nicolas Jara - {ano} - Entraste a las {new Date().toLocaleTimeString()} a este sitio</p>

    </footer>;
};

export default Footer;