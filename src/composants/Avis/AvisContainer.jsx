import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../../assets/css/avis/avis.css'

import AvisSeul from './AvisSeul';

const AvisContainer = () => {

    const listAvis = [
      {
        client: "Bertrand LESAUVAGE | Color Telecom",
        star: 5,
        avis: "Je suis agréablement surpris de la qualité des services que Nolan fournis. Je lui mets la note de 5 étoiles, il traite la demande rapidement et d'une très bonne qualité ! Je recommande ses services !",
        website: "https://standardenligne.fr"
      },
      {
        client: "Rooksaar | Amis",
        star: 5,
        avis: "Nolan est un élève en développement web très impliqué, qui à le sens du détail et qui apprend très vite, son site à été parfaitement réaliser en une seule année de dev web. Bravo à toi !",
        website: false
      },
      {
        client: "Rikka | Amis",
        star: 5,
        avis: "Je trouve le site que Edofo a réalisé pour son portfolio est très ergonomique, facile d'usage et plaisant a regarder !",
        website: false
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
      // eslint-disable-next-line
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