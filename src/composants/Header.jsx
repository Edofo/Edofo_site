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

    // burger 
    const [menuTl] = useState(gsap.timeline({ paused: true }));

    const burger1 = useRef(null)
    const burger2 = useRef(null)
    const burger3 = useRef(null)

    const bgm = useRef(null)

    const m1 = useRef(null)
    const m2 = useRef(null)
    const m3 = useRef(null)
    const m4 = useRef(null)

    useEffect(() => {
      menuTl
      .to(burger1.current, {
        duration: 0.2,
        rotation: 45,
        yPercent: 290
      })
      .to(burger2.current, {
        duration: 0.2,
        opacity: 0
      }, 0)
      .to(burger3.current, {
        duration: 0.2,
        rotation: -45,
        yPercent: -290
      }, 0)
      .fromTo(bgm.current, {
        width: '0',
        opacity: 0  
      }, {
        width: '100%',
        opacity: 1
      })
      .fromTo(m1.current, {
        scale: 0
      }, style)
      .fromTo(m2.current, {
        scale: 0
      }, style)
      .fromTo(m3.current, {
        scale: 0
      }, style)
      .fromTo(m4.current, {
        scale: 0
      }, style)
      .reverse()

      // eslint-disable-next-line
    }, [])

    const toggleMenuTimeline = () => {
      menuTl.reversed(!menuTl.reversed());
    };

    return (
      <div>
        <div className="header">
            <img href={ page === "accueil" ? "/" : null } src={logo} alt="logo-Edofo" width="75px" height="75px"/>
            <div className="header-link header-pc">
              <li ref={a1}><a href="/" className={ page === "accueil" ? "link-active" : null }>Accueil</a></li>
              <li ref={a2}><a  href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a></li>
              <li ref={a3}><a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a></li>
              <li ref={a4}><a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a></li>
            </div>
            <div onClick={() => toggleMenuTimeline()} className="header-mobile">
              <span ref={burger1} className="header-burger"/>
              <span ref={burger2} className="header-burger"/>
              <span ref={burger3} className="header-burger"/>
            </div>
        </div>
        <div ref={bgm} className="header-mobile-sidebar">
          <li ref={m1}><a href="/" className={ page === "accueil" ? "link-active" : null }>Accueil</a></li>
          <li ref={m2}><a  href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a></li>
          <li ref={m3}><a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a></li>
          <li ref={m4}><a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a></li>
        </div>
      </div>
    );
  }
  
  export default Header;