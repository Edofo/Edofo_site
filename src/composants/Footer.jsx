import '../assets/css/footer.css'

import logo from '../assets/img/logo/edofo.png'

const Footer = () => {

    return (
      <div className="footer">
          <div className="footer-picto">
            <a target="t_blank" href="https://discord.gg/Mks7DsjCkT" ><i className="fab fa-discord"></i></a>
            <a target="t_blank" href="https://www.youtube.com/c/EdofoML"><i className="fab fa-youtube"></i></a>
            <a target="t_blank" href="https://twitch.tv/edofo"><i className="fab fa-twitch"></i></a>
          </div>
          <img src={logo} alt="logo-Edofo" width="75px" height="75px"/>
          <div className="footer-email">
            <a href="mailto:lnolan.pro@gmail.com"><i className="far fa-envelope"></i>
            <p>lnolan.pro@gmail.com</p></a>
          </div>
      </div>
    );
  }
  
  export default Footer;