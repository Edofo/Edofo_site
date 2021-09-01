import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import ContactContainer from '../composants/Contact/ContactContainer';
import Footer from '../composants/Footer';


function Contact() {

    return (
      <div>
        <div className="home-body">
          <Header active="contact" />
          <ContactContainer />
          </div>
        <Footer />
      </div>
    );
  }
  
  export default Contact;