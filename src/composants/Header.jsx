import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../assets/css/header.css'

import logo from '../assets/img/logo/edofo.png'

function Header(props) {

    const[page] = useState(props.active)

    const a1 = useRef(null)
    const a2 = useRef(null)
    const a3 = useRef(null)
    const a4 = useRef(null)

    const style = {
      scale: 1,
      duration: 0.25,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }

    useEffect(() => {
      const tl = gsap.timeline({ paused: true })
      tl
      .fromTo(a1.current, {
        scale: 0
      }, style)
      .fromTo(a2.current, {
        scale: 0
      }, style)
      .fromTo(a3.current, {
        scale: 0
      }, style)
      .fromTo(a4.current, {
        scale: 0
      }, style)
      .play()

      // eslint-disable-next-line
    }, [])

    return (
      <div className="header">
          <img href={ page === "accueil" ? "/" : null } src={logo} alt="logo-Edofo" width="75px" height="75px"/>
          <div className="header-link">
            <li ref={a1}><a href="/" className={ page === "accueil" ? "link-active" : null }>Accueil</a></li>
            <li ref={a2}><a  href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a></li>
            <li ref={a3}><a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a></li>
            <li ref={a4}><a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a></li>
          </div>
      </div>
    );
  }
  
  export default Header;