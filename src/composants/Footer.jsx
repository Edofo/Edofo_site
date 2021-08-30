import '../assets/css/footer.css'

import logo from '../assets/img/logo/edofo.png'

function Footer() {

    return (
      <div className="footer">
          <div>
            <i className="fab fa-discord"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitch"></i>
          </div>
          <img src={logo} alt="logo-Edofo" width="75px" height="75px"/>
          <div className="footer-email">
            <i className="far fa-envelope"></i>
            <p>lnolan.pro@gmail.com</p>
          </div>
      </div>
    );
  }
  
  export default Footer;