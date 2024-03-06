import React from "react";

const Header = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <a href="#">
                  <i className="fas fa-map-marker-alt me-2 text-secondary" />
                </a>
                23 Ranking Street, New York
              </small>
              <small className="me-3 text-white-50">
                <a href="#">
                  <i className="fas fa-envelope me-2 text-secondary" />
                </a>
                vtech@gmail.com
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Note : We help you to Grow your Business</small>
            </div>
            <div className="top-link">
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-facebook-f text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-twitter text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle"
              >
                <i className="fab fa-instagram text-primary" />
              </a>
              <a
                href=""
                className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"
              >
                <i className="fab fa-linkedin-in text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      <>
        {/* Navbar Start */}
        <div className="container-fluid bg-primary">
          <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg py-0">
              <a href="/" className="navbar-brand">
                <h1 className="text-white fw-bold d-block">
                  V<span className="text-secondary">Tech</span>{" "}
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse bg-transparent"
                id="navbarCollapse"
              >
                <div className="navbar-nav ms-auto mx-xl-auto p-0">
                  <a
                    href="/"
                    className="nav-item nav-link active text-secondary"
                  >
                    Home
                  </a>
                  <a href="/about" className="nav-item nav-link">
                    About
                  </a>
                  <a href="/services" className="nav-item nav-link">
                    Services
                  </a>
                  {/* <a href="/project" className="nav-item nav-link">
                    Projects
                  </a>
                   <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu rounded">
                      <a href="blog" className="dropdown-item">
                        Our Blog
                      </a>
                      <a href="team" className="dropdown-item">
                        Our Team
                      </a>
                      <a href="testimonial" className="dropdown-item">
                        Testimonial
                      </a>
                      <a href="404" className="dropdown-item">
                        404 Page
                      </a>
                    </div>
                  </div> */}
                  <a href="/contact" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
              </div>
              <div className="d-none d-xl-flex flex-shirink-0">
                <div
                  id="phone-tada"
                  className="d-flex align-items-center justify-content-center me-4"
                >
                  <a
                    href=""
                    className="position-relative animated tada infinite"
                  >
                    <i className="fa fa-phone-alt text-white fa-2x" />
                    <div
                      className="position-absolute"
                      style={{ top: "-7px", left: 20 }}
                    >
                      <span>
                        <i className="fa fa-comment-dots text-secondary" />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="d-flex flex-column pe-4 border-end">
                  <span className="text-white-50">Have any questions?</span>
                  <span className="text-secondary">Call: + 0123 456 7890</span>
                </div>
                <div className="d-flex align-items-center justify-content-center ms-4 ">
                  <a href="#">
                    <i className="bi bi-search text-white fa-2x" />{" "}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </>
    </>
  );
};

export default Header;
