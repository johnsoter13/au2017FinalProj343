import React, { Component } from 'react';

// Footer displays additional information and ways to contact us
/* Source: https://tutorialzine.com/2015/01/freebie-5-responsive-footer-templates */
class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3>Uni<span>Store</span></h3>


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
            <p><a className="text-white" href="mailto:support@company.com">support@unistore.com</a></p>
          </div>

        </div>

        <div className="footer-right">
          <p className="footer-company-about text-white">
            <h2 className="lead">About the company: </h2>
            <p className="lead" id="about">We're all about furthering education without the exorbitant costs of textbooks.</p>
          </p>
          <br />
          <p className="footer-stay-connected">
            <span>Stay connected and follow us</span>
          </p>
          <div className="footer-icons">
            <a href="https://github.com/johnsoter13/au2017FinalProj343"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;