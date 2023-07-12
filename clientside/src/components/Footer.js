import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./css/Footer.css";
import logo from "./assests/logo.png";

function Footer() {
  return (
    <footer class="footer-distributed">

    <div class="footer-left">

    <img className="l" src={logo} alt='logo'/>

      <p class="footer-links">
        <a href="/sitemain" class="link-1">Home</a>
        
        <a href="https://en.wikipedia.org/wiki/Train_ticket">Blog</a>
      
        <a href="#">Pricing</a>
      
        <a href="https://en.wikipedia.org/wiki/Train_ticket">About</a>
        
        <a href="https://www.google.com/search?q=sri+lankan+railway+department+number&oq=sri+lankan+railway+department+number&aqs=chrome..69i57j0i22i30l8j0i390i650.13195j0j15&sourceid=chrome&ie=UTF-8">Contact</a>
      </p>

      <p class="footer-company-name">RESM © 2023</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Sri Lanka Railways</span> Sri Lanka Railways Headquarters,</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>Colombo 10 , Sri Lanka</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">Telephones : +94 11 4 600 111</a></p>
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the REMS</span>
        The Sri Lanka Railway Department is Sri Lanka's railway owner and primary operator. As part of the Sri Lankan government, it is overseen by the Ministry of Transport.
      </p>

      <div class="footer-icons">

        <a href="https://www.linkedin.com"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.github.com/"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.github.com/"><i class="fa-brands fa-github"></i></a>

      </div>

    </div>

  </footer>
  );
}

export default Footer;
