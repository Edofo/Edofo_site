import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import ContactContainer from '../composants/Contact/ContactContainer';
import Footer from '../composants/Footer';


const Contact = () => {

    return (
      <div>
        <Header active="contact" />
        <div className="home-body">
          <ContactContainer />
          </div>
        <Footer />
      </div>
    );
  }
  
  export default Contact;