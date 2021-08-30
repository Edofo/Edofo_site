import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import '../../assets/css/home/home.css'

import logo from '../../assets/img/logo/edofo.png'

function HomeContainer() {

    const dateNow = new Date()

    const [menuTl1] = useState(gsap.timeline({ paused: true }));

    const bitTitle1Ref = useRef(null);
    const title1Ref = useRef(null);
    const btn1Ref = useRef(null);
    const underline1Ref = useRef(null);
    const underline1Ref2 = useRef(null);

    useEffect(() => {
        menuTl1
        .to(btn1Ref.current, { backgroundColor: "#4169E1", xPercent: 10})
        .to(btn1Ref.current, { color: "white"}, '-=0.2')
        .to(bitTitle1Ref.current, { color: "#304eaa" }, '-=0.6')
        .fromTo(underline1Ref.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.6')
        .fromTo(underline1Ref2.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.7')
    }, []);

    const mouseEnter1 = () => {
        menuTl1.play()
    }

    const mouseLeave1 = () => {
        menuTl1.reverse()
    }

    return (
      <div className="home-container">

          <section id="home-section-1">
              <div className="home-section">
                  <div className="home-cat-title">
                    <img src={logo} alt="logo-Edofo" width="75px" height="75px"/>
                    <h1 ref={bitTitle1Ref}>Développeur Fullstack</h1>
                  </div>
                  <div className="home-cat-text">
                    <h2 ref={title1Ref}>Qui suis-je ?</h2>
                    <span ref={underline1Ref} class="underline"></span>
                    <p>Je me présente, je me nomme Nolan LEBOUCHER, j’ai {dateNow.getFullYear() - 2003} ans, je suis né le 18 décembre 2002 à Saint-Lô. Je suis actuellement en Bachelor Concepteur Développeur / Global Programming au sein de l'école d'ingénieurs Efrei situé à Villejuif. Je suis rigoureux, très calme, j’ai acquis une très bonne maîtrise de la langue Anglaise, ce qui est primordial pour les développeurs. Je suis assez logique car pour réussir son développement il faut réussir à faire preuve de réflexion et de logique. Je suis patient, je comprends vite ce que l’on me dit.</p>
                    <span ref={underline1Ref2} class="underline2"></span>
                    <button onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1} ref={btn1Ref} href="contact">Me contacter</button>
                  </div>
              </div>
          </section>

          <section>
              <div>
                  <div>

                  </div>
                  <div>
                      
                  </div>
              </div>
          </section>

          <section>
              <div>
                  <div>

                  </div>
                  <div>
                      
                  </div>
              </div>
          </section>

          <section>
              <div>
                  <div>

                  </div>
                  <div>
                      
                  </div>
              </div>
          </section>
      </div>
    );
  }
  
  export default HomeContainer;