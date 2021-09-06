import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../../assets/css/portfolio/portfolio.css'
import PortfolioSeul from './PortfolioSeul';

import exemple1 from '../../assets/img/exemple/exemple1.png'
import exemple2 from '../../assets/img/exemple/exemple2.png'

import exemple3 from '../../assets/img/exemple/exemple3.png'

import exemple4 from '../../assets/img/exemple/exemple4.png'
import exemple5 from '../../assets/img/exemple/exemple5.png'

import exemple6 from '../../assets/img/exemple/exemple6.png'
import exemple7 from '../../assets/img/exemple/exemple7.png'

const PortfolioContainer = () => {


  const listExemple = [
    {
      title: "Tunnel Standard | Color Telecom",
      desc: "Le site est un tunnel de vente pour vendre des standard virtuel. Accompagné d'un système pour envoyer un formulaire de config pour son standard. Les APIs utilisées sont: Stripe (Carte Bancaire) / GoCardLess (Prélèvement Bancaire) / Paypal / NewTech (Stockage des numéros) / Logisav (Gestion des factures clients).",
      website: "https://commande.standardenligne.fr",
      exemple1: exemple1,
      exemple2: exemple2
    },
    {
      title: "Panel Admin | Color Telecom",
      desc: "Le site est un panel admin permettant de géré les informations du tunnel standard. Ainsi que de pouvoir envoyer des SMS aux clients qui n'ont pas payés leurs factures. Les APIs utilisées sont: API du tunnel / Mtarget (pour l'envoi des SMS).",
      website: false,
      exemple1: exemple3,
      exemple2: false
    },
    {
      title: "Edofo TV | Site Perso",
      desc: "Le site a été réalisé par plaisir dans mes débuts de développement. Il requete les APIs de Youtube et Twitch.",
      website: "https://edofotv.w2.cmws.fr",
      exemple1: exemple4,
      exemple2: exemple5
    },
    {
      title: "LyraCraft RP | Site Perso",
      desc: "Le site est un site pour un projet perso, qui est LyraCraft Roleplay. Ce site a été également développé dans mes débuts",
      website: "https://lyracraft.fr",
      exemple1: exemple7,
      exemple2: exemple6
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
            <PortfolioSeul key={i} id={i} cloud={i} title={x.title} desc={x.desc} website={x.website} exemple1={x.exemple1} exemple2={x.exemple2}/>
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