import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import PortfolioContainer from '../composants/Portfolio/PortfolioContainer';
import Footer from '../composants/Footer';


function Portfolio() {

    return (
      <div>
        <div className="home-body">
          <Header active="portfolio" />
          <PortfolioContainer />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Portfolio;