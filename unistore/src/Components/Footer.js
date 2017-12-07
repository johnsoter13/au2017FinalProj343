import React, { Component } from 'react';

/* Source: https://tutorialzine.com/2015/01/freebie-5-responsive-footer-templates */
class Footer extends Component {
    render() {
      return (
        <footer className="footer-distributed">
        
              <div className="footer-left">
        
                <h3>Uni<span>Store</span></h3>
        
                <p className="footer-links">
                  <a href="#">Home</a>
                  ·
                  <a href="#">Blog</a>
                  ·
                  <a href="#">Pricing</a>
                  ·
                  <a href="#">About</a>
                  ·
                  <a href="#">Faq</a>
                  ·
                  <a href="#">Contact</a>
                </p>
        
                <p className="footer-company-name">UniStore; 2017</p>
              </div>
        
              <div className="footer-center">
        
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p><span>1218 Campus Parkway</span> Seattle, WA, USA</p>
                </div>
        
                <div>
                  <i className="fa fa-phone"></i>
                  <p>+1-(888)123-456</p>
                </div>
        
                <div>
                  <i className="fa fa-envelope"></i>
                  <p><a href="mailto:support@company.com">support@unistore.com</a></p>
                </div>
        
              </div>
        
              <div className="footer-right">
        
                <p className="footer-company-about">
                  <span>About the company</span>
                  Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
        
                <div className="footer-icons">
        
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-github"></i></a>
        
                </div>
        
              </div>
        
            </footer>
      )
    }
  }

export default Footer;