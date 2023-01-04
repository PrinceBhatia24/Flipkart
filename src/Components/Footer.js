import React from 'react'

export default function Footer() {
  return (
<>
  {/* <====================Footer============================> */}
  <footer
    className="text-center mt8 text-lg-start text-light"
    style={{ backgroundColor: "#182337" }}
  >
    <section
      className="d-flex justify-content-center justify-content-lg-between  border-bottom"
      style={{ backgroundColor: "#182337" }}
    ></section>
    <section className="" style={{ backgroundColor: "#182337" }}>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Registered Office Address:
            </h6>
            <p>
            Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">ABOUT</h6>
            <p>
              <a href="#!" className="text-reset">
              Contact Us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
            About Us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Flipkart Stories
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
              Flipkart Wholesale
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">POLICY</h6>
            <p>
              <a href="#!" className="text-reset">
              EPR Compliance
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Sitemap
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Privacy
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Security
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
   
    {/* Copyright */}
  </footer>
  {/* <====================Footer==========================> */}

  <>
  {/* <====================Popup Banners==========================> */}
  <div id="toast">
  <div className="container mt-5 mb-5 text-center" style={{ fontSize: 22 }}>
  <button
    id="clse"
    className="btn-close"
    type="button"
    data-bs-dismiss="container"
    style={{ marginLeft: 1700 }}
    // onClick={cookiesDismiss}
  />{" "}
  <h3>
    We use cookies to analyze traffic and deliver personalized content. Click
    'Accept and Continue' to allow all cookies. Click 'View cookie settings' to
    allow certain categories of cookies. Click the “X” to only allow cookies
    vital to the website running. Update your cookie settings from our Cookie
    Policy.
  </h3>{" "}
  <button
    id="accept"
    className="btn btn-light text-primary border-primary mt-3"
    // onClick={cookiesDismiss}
  >
    Accept and Continue
  </button>
</div>

    </div>
  {/* <====================Popup Banners==========================> */}
</>

</>

  )
}
// setTimeout(function () {
//     document.getElementById('toast');
// }, 1000);

// setTimeout(function () {
//     var elemet = document.getElementById('toast');
//     elemet.remove();
// }, 10000);
// function cookiesDismiss() {
//     var elemet = document.getElementById('toast');
//     elemet.remove();
// }