import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import HomeContainer from "../composants/Home/HomeContainer";
import Footer from '../composants/Footer';


const Home = () => {

    return (
      <div>
        <Header active="accueil" />
        <div className="home-body">
          <HomeContainer />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;