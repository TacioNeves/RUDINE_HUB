import React from 'react';
import { Container, Row, Col, Card, Button} from "react-bootstrap";
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
            <div>
              <p className='copy-right-title-sec'>Services</p>
              Search Engine Optimization<br/>
              Search Engine Advertising<br/>
              Web Development & Design<br/>
              Social Media Marketing<br/>
              Content Marketing<br/>
              Digital Marketing Strategy<br/>
            </div>
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
        <div className="copy-right-sec d-flex">
          <p className="copy-right">&copy; 2024 Veeramanikandan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;