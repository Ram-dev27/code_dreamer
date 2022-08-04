import React from 'react';
import style from './footer.module.css';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerBlock}>
        <div>
          <h2>Marketing</h2>
          <p>Search Engine Optimization(SEO)</p>
          <p>Search Engine Marketing(SEM)</p>
          <p>Email Marketing(EM)</p>
          <p>Social Media Marketing(SMM)</p>
        </div>
        <div>
          <h2>DEVELOPMENT</h2>
          <p>UI/UX Solutions</p>
          <p>WordPress Web Development</p>
          <p>E-Commerce Web Development</p>
          <p>Android App Development</p>
          <p>iOS App Development</p>
        </div>
        <div>
          <h2>CONTACT US</h2>
          <p>info@codedreamer.com</p>
          <p>9876543210</p>
          <p>
            #01, Sample Steer, Office address here,
            <br />
            {' '}
            Chennai, Tamil-Nadu, India
          </p>
        </div>
      </div>
      <div className={style.socialMedia}>social media links</div>
    </div>
  );
}

export default Footer;
