"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import CountUp from "react-countup";
import QuoteImg from "../../../public/images/v4/quote.png";

function TestimonialsCard() {
  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      {/* Logo Section */}
      <div style={{ backgroundColor: "black", display: "flex", justifyContent: "center" }}>
        <img
          src="https://dev.hostcurator.com/wp-content/themes/Hostcurator/theme_assets/images/BottomLogo.png"
          style={{ width: "90%",  }}
          alt="Hostcurator Logo"
        />
      </div>

      <FadeInStaggerTwo className="section">
        <FadeInStaggerTwoChildren className="row">
          <div className="col-lg-12" style={{ margin: 0 }}>
            <div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
              {/* Heading and Social Icons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "0px",
                }}
              >
                <h2
                  style={{
                    padding: "0px",
                    color: "#7947DD",
                    textTransform: "uppercase",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: "bolder",
                  }}
                >
                  Let’s Connect
                </h2>

                <div className="aximo-social-icon social-large">
                  <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0, flexWrap: "wrap" }}>
                    <li>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr style={{ border: "1px solid black", width: "100%", marginTop: "10px" }} />

              {/* Contact Information */}
              <div className="aximo-testimonial-data">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "20px",
                    justifyContent: "start",
                    textAlign: "start",
                  }}
                >
                  <a href="mailto:info@hostcurator.com" style={{ color: "white", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
                    info@hostcurator.com
                  </a>
                  <img src="./images/allimg/logo/stars.png" style={{ height: "24px", marginTop: "2px" }} alt="Star" />
                  <a href="tel:04844031073" style={{ color: "white", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
                    0484 4031073
                  </a>
                  <img src="./images/allimg/logo/stars.png" style={{ height: "24px", marginTop: "2px" }} alt="Star" />
                  <a href="tel:+919496826626" style={{ color: "white", fontSize: "clamp(14px, 1.5vw, 18px)" }}>
                    +91 9496826626
                  </a>
                </div>

                {/* Another Horizontal Line */}
                <hr style={{ border: "1px solid black", width: "100%", marginTop: "10px" }} />

                {/* Address */}
                <p
                  style={{
                    color: "white",
                    fontSize: "clamp(16px, 1.8vw, 22px)",
                    fontWeight: "lighter",
                    textAlign: "start",
                  }}
                >
                  Hostcurator IT Solutions PVT LTD<br />
                  Host Tower, Room Number A, 41/2581-A2<br />
                  Palarivattom, Kochi, Kerala 682028
                </p>
              </div>
            </div>
          </div>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </div>
  );
}

export default TestimonialsCard;
