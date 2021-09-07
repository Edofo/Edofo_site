import '../assets/css/pages/home.css'

import Header from "../composants/Header";
import PortfolioContainer from '../composants/Portfolio/PortfolioContainer';
import Footer from '../composants/Footer';


const Portfolio = () => {

    return (
      <div>
        <Header active="portfolio" />
        <div className="home-body">
          <PortfolioContainer />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Portfolio;