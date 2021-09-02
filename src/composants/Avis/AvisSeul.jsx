import { useEffect, useRef } from 'react';
import { gsap } from "gsap";

import '../../assets/css/avis/avis.css'

import logo from '../../assets/img/logo/edofo.png'

import cloud1Img from '../../assets/img/cloud/1.png'
import cloud2Img from '../../assets/img/cloud/2.png'

function AvisSeul(props) {
  
    function isOdd(num) { return num % 2;}

    const idAvis = `avis-container-${props.id}`

    const cloud1Ref = useRef(null)
    const cloud2Ref = useRef(null)

    useEffect(() => {
      isOdd(props.cloud) === 1 ?
        gsap.fromTo(document.querySelector(`#avis-container-${props.id}`), {
            opacity: '0',
            xPercent: '-10'
        }, {
            opacity: '1',
            xPercent: '0',
            duration: 1,
            scrollTrigger: {
                trigger: document.querySelector(`#avis-container-${props.id}`),
                start: 'top-=50 top+=400',
                end: 'bottom center',
                toggleActions: 'play',
            }
        })
      :
        gsap.fromTo(document.querySelector(`#avis-container-${props.id}`), {
          opacity: '0',
          xPercent: '10',
      }, {
          opacity: '1',
          xPercent: '0',
          duration: 1,
          scrollTrigger: {
              trigger: document.querySelector(`#avis-container-${props.id}`),
              start: 'top-=50 top+=400',
              toggleActions: 'play',
          }
      })

      
      // eslint-disable-next-line
    }, [])

    return (
      <div id={idAvis} className="avis-container">
        {
          isOdd(props.cloud) === 1 ?
            <img ref={cloud1Ref} className="avis-cloud-1" src={cloud1Img} alt="cloud-edofo" width="200px" height="200px"/>
          :
            null
        }
        <img src={logo} alt="avis-edofo" width="150px" height="150px"></img>
        <div className="avis-subcontainer">
          <p className="avis-title">{props.client}</p>
          <div className="avis-star">
            <p><strong>Étoiles :</strong></p>
            <span style={ props.star >= 1 ? {color: "orange"} : {color: "black"} } className="fa fa-star"></span>
            <span style={ props.star >= 2 ? {color: "orange"} : {color: "black"} } className="fa fa-star"></span>
            <span style={ props.star >= 3 ? {color: "orange"} : {color: "black"} } className="fa fa-star"></span>
            <span style={ props.star >= 4 ? {color: "orange"} : {color: "black"} } className="fa fa-star"></span>
            <span style={ props.star >= 5 ? {color: "orange"} : {color: "black"} } className="fa fa-star"></span>
          </div>
          <p><strong>Avis :</strong> {props.avis}</p>
          <p><strong>Site web :</strong> {props.website}</p>
        </div>
        {
          isOdd(props.cloud) === 0 ?
            <img ref={cloud2Ref} className="avis-cloud-2" src={cloud2Img} alt="cloud-edofo" width="200px" height="200px"/>
          :
            null
        }
      </div>
    );
  }
  
  export default AvisSeul;