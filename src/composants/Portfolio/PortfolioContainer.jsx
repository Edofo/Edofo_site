import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../../assets/css/portfolio/portfolio.css'
import PortfolioSeul from './PortfolioSeul';

function PortfolioContainer() {


  const listExemple = [
    {
      title: "Tunnel Standard | Color Telecom",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://commande.standardenligne.fr"
    },
    {
      title: "Panel Admin | Color Telecom",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: false
    },
    {
      title: "Nom Client/Entreprise",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://exemple.com"
    },
    {
      title: "Nom Client/Entreprise",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://exemple.com"
    },
    {
      title: "Nom Client/Entreprise",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://exemple.com"
    },
    {
      title: "Nom Client/Entreprise",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://exemple.com"
    },
    {
      title: "Nom Client/Entreprise",
      desc: "Je trouve que Nolan réalise des sites web de qualité en un temps record !",
      website: "https://exemple.com"
    },
  ]

  const [listExempleState, setListExemple] = useState([])

  useEffect(() => {
    let listTampon = []

    for (let i = 0; i < 4; i++) {
      const element = listExemple[i]
      listTampon.push(element)
      if(i === 3 || element === undefined) {
        if(element === undefined) {
          listTampon.pop()
          setListExemple(listTampon)

        } else {
          setListExemple(listTampon)
        }
      }
    }
    // eslint-disable-next-line
  }, [])


  const addExemple = () => {
    let listTampon = listExempleState
    for (let i = 0; i < 4; i++) {
      const element = listExemple[i + listExempleState.length]
      listTampon.push(element)
      if(i === 3 | element === undefined) {
        if(element === undefined) {
          setListExemple(listExemple)

        } else {
          setListExemple(listTampon)
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
    <div className="portfolio">
      {
        listExempleState.map((x, i) => {
          return (
            <PortfolioSeul key={i} id={i} cloud={i} title={x.title} desc={x.desc} website={x.website} />
          )
        })
      }
      {
        listExemple.length === listExempleState.length ?
          null
        :
          <button onMouseEnter={() => Tl.play()} onMouseLeave={() => Tl.reverse()} ref={btnRef} onClick={() => addExemple()}>Voir plus d'exemple</button>
      }
    </div>
  );
}
  
  export default PortfolioContainer;