import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../../assets/css/home/home.css'

import logo from '../../assets/img/logo/edofo.png'

import PictoCaddieImg from '../../assets/img/picto/caddie.png'
import PictoComputerImg from '../../assets/img/picto/computer.png'

import cloud1Img from '../../assets/img/cloud/1.png'
import cloud2Img from '../../assets/img/cloud/2.png'
import cloud3Img from '../../assets/img/cloud/3.png'
import cloud4Img from '../../assets/img/cloud/4.png'

gsap.registerPlugin(ScrollTrigger)

function HomeContainer() {

    const dateNow = new Date()

    // Première étape
    const [menuTl1] = useState(gsap.timeline({ paused: true }));

    const bitTitle1Ref = useRef(null);
    
    const start1 = useRef(null)

    const btn1Ref = useRef(null);
    const underline1Ref = useRef(null);
    const underline1Ref2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(start1.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1
        })

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

        // eslint-disable-next-line
    }, []);

    // Deuxieme étape
    const [menuTl2] = useState(gsap.timeline({ paused: true }));

    const start2 = useRef(null)

    const btn2Ref = useRef(null);
    const underline2Ref = useRef(null);
    const underline2Ref2 = useRef(null);

    const cloud2 = useRef(null);
    const caddieRef = useRef(null);
    const cloud2Ref2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(cloud2Ref2.current, {
            opacity: '0',
            xPercent: '20'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-2"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(cloud2.current, {
            opacity: '0',
            xPercent: '-30'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-2"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(caddieRef.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-2"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(start2.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-2"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })

        menuTl2
        .to(btn2Ref.current, { backgroundColor: "#4169E1", xPercent: 10})
        .to(btn2Ref.current, { color: "white"}, '-=0.2')
        .fromTo(underline2Ref.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.6')
        .fromTo(underline2Ref2.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.7')
        .fromTo(cloud2.current, {
            xPercent: 0,
        }, {
            xPercent: 10,
            duration: 1
        }, '-=1.5')
        .fromTo(cloud2Ref2.current, {
            xPercent: 0,
        }, {
            xPercent: -10,
            duration: 1
        }, '-=1.5')

        // eslint-disable-next-line
    }, []);


    // Troisième étape
    const [menuTl3] = useState(gsap.timeline({ paused: true }));

    const start3 = useRef(null)

    const btn3Ref = useRef(null);
    const underline3Ref = useRef(null);
    const underline3Ref2 = useRef(null);

    const cloud3 = useRef(null);
    const computerRef = useRef(null);
    const cloud3Ref2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(cloud3Ref2.current, {
            opacity: '0',
            xPercent: '-20'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-3"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(cloud3.current, {
            opacity: '0',
            xPercent: '20'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-3"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(computerRef.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-3"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })
        gsap.fromTo(start3.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-3"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })

        menuTl3
        .to(btn3Ref.current, { backgroundColor: "#4169E1", xPercent: 10})
        .to(btn3Ref.current, { color: "white"}, '-=0.2')
        .fromTo(underline3Ref.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.6')
        .fromTo(underline3Ref2.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.7')
        .fromTo(cloud3.current, {
            xPercent: 0,
        }, {
            xPercent: 10,
            duration: 1
        }, '-=1.5')
        .fromTo(cloud3Ref2.current, {
            xPercent: 0,
        }, {
            xPercent: -10,
            duration: 1
        }, '-=1.5')

        // eslint-disable-next-line
    }, []);

    // Quatrième étape
    const [menuTl4] = useState(gsap.timeline({ paused: true }));

    const start4 = useRef(null)

    const btn4Ref = useRef(null);
    const underline4Ref = useRef(null);
    const underline4Ref2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(start4.current, {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector("#home-section-4"),
                start: 'top-=150 top+=400',
                end: 'bottom center',
                toggleActions: 'play'
            }
        })

        menuTl4
        .to(btn4Ref.current, { backgroundColor: "#4169E1", xPercent: 10})
        .to(btn4Ref.current, { color: "white"}, '-=0.2')
        .fromTo(underline4Ref.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.6')
        .fromTo(underline4Ref2.current, {
            width: "0%",
        }, {
            width: "50%",
            duration: 1, 
        }, '-=0.7')

        // eslint-disable-next-line
    }, []);

    return (
      <div className="home-container">

          <section id="home-section-1">
              <div className="home-section">
                  <div className="home-cat-title">
                    <img src={logo} alt="logo-Edofo" width="75px" height="75px"/>
                    <h1 ref={bitTitle1Ref}>Développeur Fullstack</h1>
                  </div>
                  <div ref={start1} className="home-cat-text">
                    <h2>Qui suis-je ?</h2>
                    <span ref={underline1Ref} className="underline"></span>
                    <p>Je me présente, je me nomme Nolan LEBOUCHER, j’ai {dateNow.getFullYear() - 2003} ans, je suis né le 18 décembre 2002 à Saint-Lô. Je suis actuellement en Bachelor Concepteur Développeur / Global Programming au sein de l'école d'ingénieurs Efrei situé à Villejuif. Je suis rigoureux, très calme, j’ai acquis une très bonne maîtrise de la langue Anglaise, ce qui est primordial pour les développeurs. Je suis assez logique car pour réussir son développement il faut réussir à faire preuve de réflexion et de logique. Je suis patient, je comprends vite ce que l’on me dit.</p>
                    <span ref={underline1Ref2} className="underline2"></span>
                    <button onMouseEnter={() => menuTl1.play()} onMouseLeave={() => menuTl1.reverse()} ref={btn1Ref} href="contact">Me contacter</button>
                  </div>
              </div>
          </section>

          <div className="separator"></div>

          <section id="home-section-2">
              <div className="home-section2">
                  <div ref={start2} className="home-cat-text">
                    <h2>Vous hésitez à passer commande ?</h2>
                    <span ref={underline2Ref} className="underline"></span>
                    <p><strong>Laissez moi vous présenter ce que j'ai déjà réalisé pour mes clients.</strong><br />Mon Portfolio vous présentera une grande majorité de ce que je réalisé pour vos demandes précises et suivant votre besoin</p>
                    <span ref={underline2Ref2} className="underline2"></span>
                    <button onMouseEnter={() => menuTl2.play()} onMouseLeave={() => menuTl2.reverse()} ref={btn2Ref} href="contact">Voir mon portfolio</button>
                  </div>
                  <div className="home-cat-picto">
                    <img className="home-img-1-1" ref={cloud2} src={cloud2Img} alt="cloud-edofo" width="50%" height="50%"></img> 
                    <img className="home-img-1-2" ref={caddieRef} src={PictoCaddieImg} alt="caddie-edofo" width="50%" height="50%"></img> 
                    <img className="home-img-1-3" ref={cloud2Ref2} src={cloud4Img} alt="cloud-edofo" width="50%" height="50%"></img>                                           
                  </div>
              </div>
          </section>

          <div className="separator"></div>

          <section id="home-section-3">
              <div className="home-section2">
                  <div className="home-cat-picto">
                    <img className="home-img-2-1" ref={cloud3} src={cloud2Img} alt="cloud-edofo" width="50%" height="50%"></img> 
                    <img className="home-img-2-2" ref={computerRef} src={PictoComputerImg} alt="computer-edofo" width="50%" height="50%"></img> 
                    <img className="home-img-2-3" ref={cloud3Ref2} src={cloud1Img} alt="cloud-edofo" width="50%" height="50%"></img>                                           
                  </div>
                  <div ref={start3} className="home-cat-text">
                    <h2>Vous avez vu les exemples de mes créations ?</h2>
                    <span ref={underline3Ref} className="underline"></span>
                    <p><strong>Alors laissez moi vous guider.</strong><br />Je vais vous emmener directement vers l'endroit le plus simple pour me contacter</p>
                    <span ref={underline3Ref2} className="underline2"></span>
                    <button onMouseEnter={() => menuTl3.play()} onMouseLeave={() => menuTl3.reverse()} ref={btn3Ref} href="portfolio">Me contacter</button>
                  </div>
              </div>
          </section>

          <div className="separator"></div>

          <section id="home-section-4">
              <div>
                  <div ref={start4} className="home-cat-text">
                    <h2>Vous hésitez toujours ?</h2>
                    <span ref={underline4Ref} className="underline"></span>
                    <p><strong>Alors laissez moi vous présenter les avis de mes clients.</strong><br />Les avis de mes clients vous permettra d'avoir une idée globale du travail que je fournis</p>
                    <span ref={underline4Ref2} className="underline2"></span>
                    <button onMouseEnter={() => menuTl4.play()} onMouseLeave={() => menuTl4.reverse()} ref={btn4Ref} href="portfolio">Voir les avis</button>
                  </div>
                  <div>
                      
                  </div>
              </div>
          </section>

          <div className="separator"></div>

      </div>
    );
  }
  
  export default HomeContainer;