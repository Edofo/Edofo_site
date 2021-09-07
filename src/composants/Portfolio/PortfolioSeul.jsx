import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../../assets/css/portfolio/portfolio.css'

import computer from '../../assets/img/computer.png'

gsap.registerPlugin(ScrollTrigger)

const PortfolioSeul = (props) => {

  function isOdd(num) { return num % 2;}

  const [Tl] = useState(gsap.timeline({ paused: true }));

  const classExemple = isOdd(props.id) === 0 ? `exemple-container` : `exemple-container exemple-container-mobile`

  const idExemple = `exemple-container-${props.id}`

  const idExemple1 = `exemple-img-${props.id}`
  const idExemple2 = `exemple-img2-${props.id}`

  const idUnderline1 = `exemple-underline1-${props.id}`
  const idUnderline2 = `exemple-underline2-${props.id}`

  const idBtn = `exemple-btn-${props.id}`

  useEffect(() => {
    isOdd(props.cloud) === 1 ?
      gsap.fromTo(`#exemple-container-${props.id}`, {
          opacity: '0',
          xPercent: '-10'
      }, {
          opacity: '1',
          xPercent: '0',
          duration: 1,
          scrollTrigger: {
              trigger: `#exemple-container-${props.id}`,
              start: 'top-=200 top+=400',
              end: 'bottom+=50 center',
              toggleActions: 'play',
          }
      })
    :
      gsap.fromTo(`#exemple-container-${props.id}`, {
        opacity: '0',
        xPercent: '10',
    }, {
        opacity: '1',
        xPercent: '0',
        duration: 1,
        scrollTrigger: {
            trigger: `#exemple-container-${props.id}`,
            start: 'top-=200 top+=400',
            end: 'bottom+=50 center',
            toggleActions: 'play',
        }
    })

    Tl
    .to(`#exemple-btn-${props.id}`, { backgroundColor: "#4169E1", xPercent: 10})
    .to(`#exemple-btn-${props.id}`, { color: "white"}, '-=0.2')
    .fromTo(`#exemple-underline1-${props.id}`, {
        width: "0%",
    }, {
        width: "50%",
        duration: 1, 
    }, '-=0.6')
    .fromTo(`#exemple-underline2-${props.id}`, {
        width: "0%",
    }, {
        width: "50%",
        duration: 1, 
    }, '-=0.7')
    .fromTo(`#exemple-img2-${props.id}`, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1
    }, '-=1')
    // eslint-disable-next-line
  }, [])

  const part1 = 
    <div className="exemple-text">
      <p className="exemple-title">{props.title}</p>
      <span id={idUnderline1} className="underline"></span>
      <p className="exemple-desc">{props.desc}</p>
      <span id={idUnderline2} className="underline2"></span>
      {
        props.website === false ?
          null
        :
          <a href={props.website}><button onMouseEnter={() => Tl.play()} onMouseLeave={() => Tl.reverse()} id={idBtn}>Voir le site</button></a>
      }
    </div>

  const part2 =
    <div className="exemple-screen">
      <img src={computer} className="exemple-mac" alt="computer-edofo" width="400px" height="100%" />
      {
        props.website === false ?
          null
        :
          <img id={idExemple2} src={props.exemple2} className="exemple-bg exemple-bg-2"  alt="exemple-edofo" width="300px" height="175px" />
      }
      <img id={idExemple1} src={props.exemple1} className="exemple-bg"  alt="exemple-edofo" width="300px" height="175px" />
    </div>

  return (
    <div id={idExemple} className={classExemple}>
      {
        isOdd(props.cloud) === 1 ?
          part1
        :
          part2
      }
      {
        isOdd(props.cloud) === 1 ?
          part2
        :
          part1
      }
    </div>
  );
}
  
  export default PortfolioSeul;