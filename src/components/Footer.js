import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div class='website-rights'>Fabian Seelert © 2020</div>
        <ul class='footer-links'>
          <li><Link to="/Impressum" className="foot-links">
            <u>Impressum</u>
          </Link></li>
          <li><Link to="/Datenschutz" className="foot-links">
            <u>Datenschutzerklärung</u>
          </Link></li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
