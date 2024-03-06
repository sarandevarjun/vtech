import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid footer bg-dark wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <a href="index.html">
                <h1 className="text-white fw-bold d-block">
                  High<span className="text-secondary">Tech</span>{" "}
                </h1>
              </a>
              <p className="mt-4 text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                facere delectus qui placeat inventore consectetur repellendus
                optio debitis.
              </p>
              <div className="d-flex VTech-link">
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f text-primary" />
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-twitter text-primary" />
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-2"
                >
                  <i className="fab fa-instagram text-primary" />
                </a>
                <a
                  href=""
                  className="btn-light nav-fill btn btn-square rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in text-primary" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary">
                Short Link
              </a>
              <div className="mt-4 d-flex flex-column short-link">
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  About us
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Contact us
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Our Services
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Our Projects
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Latest Blog
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary">
                Help Link
              </a>
              <div className="mt-4 d-flex flex-column help-link">
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Terms Of use
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Privacy Policy
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Helps
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  FQAs
                </a>
                <a href="" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  Contact
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="#" className="h3 text-secondary">
                Contact Us
              </a>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a
                  href="#"
                  className="pb-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-map-marker-alt text-secondary me-2" />{" "}
                  123 Street, New York, USA
                </a>
                <a
                  href="#"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-phone-alt text-secondary me-2" /> +123
                  456 7890
                </a>
                <a
                  href="#"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <i className="fas fa-envelope text-secondary me-2" />{" "}
                  info@exmple.con
                </a>
              </div>
            </div>
          </div>
          <hr className="text-light mt-5 mb-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <a href="#" className="text-secondary">
                  <i className="fas fa-copyright text-secondary me-2" />
                  Vtech
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://vtech.com/credit-removal". Thank you for your support. *** /*/}
              <span className="text-light">
                Designed By
                <a href="https://vtech.com" className="text-secondary">
                  VTech
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-secondary btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white" />
      </a>
    </>
  );
};

export default Footer;
