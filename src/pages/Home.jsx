import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import HomeContainer from "../composants/Home/HomeContainer";
import Footer from '../composants/Footer';


function Home() {

    return (
      <div className="home-body">
          <Header active="accueil" />
          <HomeContainer />
          <Footer />
      </div>
    );
  }
  
  export default Home;