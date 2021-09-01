import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import AvisContainer from '../composants/Avis/AvisContainer';
import Footer from '../composants/Footer';


function Avis() {

    return (
      <div>
          <Header active="avis" />
          <AvisContainer />
          <Footer />
      </div>
    );
  }
  
  export default Avis;