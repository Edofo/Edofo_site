import { useState } from 'react';

import '../assets/css/header.css'

import logo from '../assets/img/logo/edofo.png'

function Header(props) {

    const[page] = useState(props.active)

    return (
      <div className="header">
          <img src={logo} alt="logo-Edofo" width="75px" height="75px"/>
          <div className="header-link">
            <a href="/" className={ page === "accueil" ? "link-active" : null}>Accueil</a>
            <a href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a>
            <a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a>
            <a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a>
          </div>
      </div>
    );
  }
  
  export default Header;