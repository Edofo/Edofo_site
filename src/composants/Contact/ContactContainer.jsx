import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import emailjs from 'emailjs-com';

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

  const sendEmail = () => {

    if(email !== "" && client !== "" && desc !== "") {
     
      const params = {
        client: client,
        email: email,
        body: desc
      }

      emailjs.init('user_GxrzHM20XGsxuTbRkA6Pg');

      emailjs.send('service_17hkypn','template_7cyil0m', params)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(err) {
        console.log('FAILED...', err);
      });

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
            <label>Email :</label>
            <input onChange={(val) => setEmail(val.target.value)} value={email} type="text" id="email" name="email" />
          </div>
          <div className="contact-form">
            <label>Nom Client/Entreprise :</label>
            <input onChange={(val) => setClient(val.target.value)} value={client} type="text" id="client" name="name" />
          </div>
          <div className="contact-form">
            <label>Description :</label>
            <textarea onChange={(val) => setDesc(val.target.value)} value={desc} type="text" id="description" name="description" />
          </div>
          <button type="button" onClick={() => sendEmail()} onMouseEnter={() => Tl.play()} onMouseLeave={() => Tl.reverse()} ref={btnRef}>Me contacter</button>
        </form>

        <img ref={cloud2Ref} className="contact-cloud2" style={{transform: 'scaleX(-1)'}} src={cloud4Img} alt="cloud-edofo" width="25vw" height="25vw"/>
    </div>
  );
}
  
export default ContactContainer;