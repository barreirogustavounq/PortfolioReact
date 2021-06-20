import React from 'react'
import "../styles/Footer.css"
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer class="site-footer">
      <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a href="https://www.facebook.com/gustavo.barreiro.1447/" ><SocialIcon href network="facebook" /></a></li>   
              <li><a href="https://www.linkedin.com/in/gustavo-barreiro-581359161/" ><SocialIcon network="linkedin" /></a></li>   
              <li><a href="https://github.com/barreirogustavounq" ><SocialIcon network="github" /></a></li>   
              <li><a href="https://wa.link/sihign" ><SocialIcon network="whatsapp" /></a></li>   
            </ul>
          </div>
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         GusDev.
            </p>
          </div>
        </div>
      </div>
</footer>
    )
}

export default Footer;