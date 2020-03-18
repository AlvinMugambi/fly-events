/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <div className="content">
            <Row>
              <Col md="2">
                <h5>About Us</h5>
                <ul className="links-vertical">
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="2">
                <h5>Market</h5>
                <ul className="links-vertical">
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Events FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Book Event
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Receive event details
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Transactions Issues
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Affiliates Program
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="4"></Col>
              <Col md="4">
                <h5>Follow Us</h5>
                <ul className="social-buttons">
                  <li>
                    <img
                      style={{ marginRight: "20px" }}
                      src={require("../assets/img/fb.png")}
                    />
                  </li>
                  <li>
                    <img
                      style={{ marginRight: "20px" }}
                      src={require("../assets/img/twitter.png")}
                    />
                  </li>
                  <li>
                    <img
                      style={{ marginRight: "20px" }}
                      src={require("../assets/img/ig.png")}
                    />
                  </li>
                </ul>
                <h5>
                  <small>Numbers Don't Lie</small>
                </h5>
                <h5>
                  14.521 <small className="text-muted">Events</small>
                </h5>
                <h5>
                  1.423.183 <small className="text-muted">Attendees</small>
                </h5>
              </Col>
            </Row>
          </div>
          <hr></hr>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed using{" "}
            <a href="#" target="_blank">
              Adobe XD
            </a>
            . Coded by{" "}
            <a href="#" target="_blank">
              AlvoMugz
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
