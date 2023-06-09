import React from "react";
import "./secondFooter.style.css";

function SecondFooter() {
  const currentYear = new Date();

  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              ></div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">About</h3>
                <p>
                  {" "}
                  Helen Lucy Child Care Center provides caring and dedicated
                  child care and education services in Chicago, Illinois, for
                  kids from fifteen months to six years old. The center provides
                  education, social, cultural, emotional, physical and
                  recreational areas to provide parents the opportunity to give
                  their child the best start possible.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">QUICK LINKS</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Why Us</a>
                  </li>
                  <li>
                    <a href="#">Our Nannies</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 socialLinks">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="f_social_icon">
                  <a href="#" className="fab fa-facebook"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                  <a href="#" className="fab fa-pinterest"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="rowCopyright align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                {`Copyright  © ${currentYear.getFullYear()} All Rights Reserved by Helen Lucy Child Care Center`}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SecondFooter;
