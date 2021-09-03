import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

import '../../assets/css/contact/contact.css'

import cloud2Img from '../../assets/img/cloud/2.png'
import cloud4Img from '../../assets/img/cloud/4.png'

function ContactContainer() {

  const [Tl] = useState(gsap.timeline({ paused: true }));

  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)

  const formRef = useRef(null)
  
  const btnRef = useRef(null)

  useEffect(() => {
    gsap
    .fromTo(cloud1Ref.current, {
      opacity: 0,
      xPercent: -20
    }, {
      opacity: 1,
      xPercent: 0,
      duration: 1
    })
    gsap
    .fromTo(cloud2Ref.current, {
      opacity: 0,
      xPercent: 20
    }, {
      opacity: 1,
      xPercent: 0,
      duration: 1
    })
    gsap
    .fromTo(formRef.current, {
      opacity: 0,
      yPercent: 10
    }, {
      opacity: 1,
      yPercent: 0,
      duration: 1
    })

    Tl
    .to(btnRef.current, { backgroundColor: "#4169E1", yPercent: -10})
    .to(btnRef.current, { color: "white"}, '-=0.2')

    // eslint-disable-next-line
  }, [])



  // send email
  const [email, setEmail] = useState("")
  const [client, setClient] = useState("")
  const [desc, setDesc] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    const message = new FormData()

    if(email !== "" && client !== "" && desc !== "") {
      message.append("email", email)
      message.append("client", client)
      message.append("body", desc)

      const options = {
        method: "post",
        body: message
      }

      fetch()

    } else {
      console.log("Il y a un problème dans le remplissage du formulaire !")
    }

  }

  return (
    <div className="contact">
        <img ref={cloud1Ref} className="contact-cloud1" src={cloud2Img} alt="cloud-edofo" width="25vw" height="25vw"/>

        <form ref={formRef}>
          <p>Formulaire de contact</p>
          <div className="contact-form">
            <label for="email">Email :</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="contact-form">
            <label for="client">Nom Client/Entreprise :</label>
            <input type="text" id="client" name="name" />
          </div>
          <div className="contact-form">
            <label for="description">Description :</label>
            <textarea type="text" id="description" name="description" />
          </div>
          <button onClick={() => sendEmail()} onMouseEnter={() => Tl.play()} onMouseLeave={() => Tl.reverse()} ref={btnRef}>Me contacter</button>
        </form>

        <img ref={cloud2Ref} className="contact-cloud2" style={{transform: 'scaleX(-1)'}} src={cloud4Img} alt="cloud-edofo" width="25vw" height="25vw"/>
    </div>
  );
}
  
export default ContactContainer;