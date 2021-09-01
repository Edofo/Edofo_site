import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../../assets/css/avis/avis.css'

import AvisSeul from './AvisSeul';

function AvisContainer() {

    const listAvis = [
      {
        client: "Nom Client/Entreprise",
        star: 1,
        avis: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
        website: "https://exemple.com"
      },
      {
        client: "Nom Client/Entreprise",
        star: 2,
        avis: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
        website: "https://exemple.com"
      },
      {
        client: "Nom Client/Entreprise",
        star: 3,
        avis: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
        website: "https://exemple.com"
      },
      {
        client: "Nom Client/Entreprise",
        star: 4,
        avis: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
        website: "https://exemple.com"
      },
      {
        client: "Nom Client/Entreprise",
        star: 5,
        avis: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
        website: "https://exemple.com"
      },
    ]

    const [listAvisState, setListAvis] = useState([])

    useEffect(() => {
      let listTampon = []

      for (let i = 0; i < 4; i++) {
        const element = listAvis[i]
        listTampon.push(element)
        if(i === 3 || element === undefined) {
          if(element === undefined) {
            listTampon.pop()
            setListAvis(listTampon)

          } else {
            setListAvis(listTampon)
          }
        }
      }
    }, [])


    const addAvis = () => {
      let listTampon = listAvisState
      for (let i = 0; i < 4; i++) {
        const element = listAvis[i + listAvisState.length]
        listTampon.push(element)
        if(i === 3 | element === undefined) {
          if(element === undefined) {
            setListAvis(listAvis)

          } else {
            setListAvis(listTampon)
          }
        }
      }
    }

    const [Tl] = useState(gsap.timeline({ paused: true }));
    
    const btnRef = useRef(null)

    useEffect(() => {
      Tl
      .to(btnRef.current, { backgroundColor: "#4169E1", yPercent: -10})
      .to(btnRef.current, { color: "white"}, '-=0.2')

      // eslint-disable-next-line
    }, [])

    return (
      <div className="avis">
        {
          listAvisState.map((x, i) => {
            return (
              <AvisSeul key={i} id={i} cloud={i} client={x.client} star={x.star} avis={x.avis} website={x.website} />
            )
          })
        }
        {
          listAvis.length === listAvisState.length ?
            null
          :
            <button onMouseEnter={() => Tl.play()} onMouseLeave={() => Tl.reverse()} ref={btnRef} onClick={() => addAvis()}>Voir plus d'avis</button>
        }
      </div>
    );
  }
  
  export default AvisContainer;