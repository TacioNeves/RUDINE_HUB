import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container footer-sec">
        <div className="copy-right-sec d-flex justify-content-between">
          <div>
            <p className="copy-right-title-sec">Contact</p>
            <b>RUDINE</b> : Matale, Central 21000, LK<br/>
            <b>Email</b> : manager@rudine.pro
          </div>
          <p className="copy-right">&copy; 2024 Veeramanikandan. All Rights Reserved.
          </p>
          <div>
            {/* Social Media Logos */}
            <p className='copy-right-title-sec'>Social Media</p>
            <img className="social-logo"
              src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706617641/Wabeler/ktzoghgtys5x4al7o3wb.png"
              alt="social-logo" />
            <img className="social-logo"
              src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706617641/Wabeler/nmdcgqxcn2b60f7fokbq.png"
              alt="social-logo" />
            <img className="social-logo"
              src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706617641/Wabeler/ulntztj0icjfivajoctb.png"
              alt="social-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;