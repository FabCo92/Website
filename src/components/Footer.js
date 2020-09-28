import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Fabian Seelert © 2020</small>
          <div class='footer-links'>
            <Link to="/Impressum" className="nav-links">
                <u>Impressum</u>        
            </Link>
            <Link to="/Datenschutz" className="nav-links">
                <u>Datenschutzerklärung</u>         
            </Link>  
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
