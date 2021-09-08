import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../assets/css/header.css'

import logo from '../assets/img/logo/edofo.png'

const Header = (props) => {

    const[page] = useState(props.active)

    let style = {
      scale: 1,
      duration: 0.25,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }

    const tl = gsap.timeline({ paused: true })
    
    const aRef = [ useRef(), useRef(), useRef(), useRef() ]

    useEffect(() => {

      aRef.forEach((x) => {
        tl
        .fromTo(x.current, {
          scale: 0
        }, {
          ...style
        })
      })
      tl
      .play()

      // eslint-disable-next-line
    }, [])

    // burger 
    const [menuTl] = useState(gsap.timeline({ paused: true }));

    const bgm = useRef(null)

    const mRef = [ useRef(), useRef(), useRef(), useRef() ]

    useEffect(() => {
      menuTl
      .to("#header-burger-1", {
        duration: 0.2,
        rotation: 45,
        yPercent: 290
      })
      .to("#header-burger-2", {
        duration: 0.2,
        opacity: 0
      }, 0)
      .to("#header-burger-3", {
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
      }, 0.1)
      mRef.forEach((x) => {
        menuTl
        .fromTo(x.current, {
          scale: 0
        }, {
          scale: 1,
          duration: 0.25,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        })
      })
      menuTl
      .reverse()

      // eslint-disable-next-line
    }, [])

    const toggleMenuTimeline = () => {
      menuTl.reversed(!menuTl.reversed());
    };

    return (
      <div className="header-all">
        <div className="header">
            <a href={ page === "accueil" ? null : "/" }><img src={logo} alt="logo-Edofo" width="75px" height="75px"/></a>
            <div className="header-link header-pc">
              <li ref={aRef[0]}><a href="/" className={ page === "accueil" ? "link-active" : null }>Accueil</a></li>
              <li ref={aRef[1]}><a  href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a></li>
              <li ref={aRef[2]}><a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a></li>
              <li ref={aRef[3]}><a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a></li>
            </div>
            <div onClick={() => toggleMenuTimeline()} className="header-mobile">
              <span id="header-burger-1" className="header-burger"/>
              <span id="header-burger-2" className="header-burger"/>
              <span id="header-burger-3" className="header-burger"/>
            </div>
        </div>
        <div ref={bgm} className="header-mobile-sidebar">
          <li ref={mRef[0]}><a href="/" className={ page === "accueil" ? "link-active" : null }>Accueil</a></li>
          <li ref={mRef[1]}><a  href="avis" className={ page === "avis" ? "link-active" : null }>Avis</a></li>
          <li ref={mRef[2]}><a href="portfolio" className={ page === "portfolio" ? "link-active" : null }>Portfolio</a></li>
          <li ref={mRef[3]}><a href="contact" className={ page === "contact" ? "link-active" : null }>Contact</a></li>
        </div>
      </div>
    );
  }
  
  export default Header;