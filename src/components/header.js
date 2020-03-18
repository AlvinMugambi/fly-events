import React from "react";

// reactstrap components
import { Row, Col, Button } from "reactstrap";

// core components
import FormModal from "./modal";

export default function Header(props) {
  const [modal, setModal] = React.useState(false);
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader && pageHeader.current && pageHeader.current.style) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const createEvent = () => {
    setModal(true);
  };
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="20">
              <h1 className="title heading-primary-main">
                Your Number One Event Organising Company
              </h1>
              <h4 className="heading-primary-sub">
                Click on any date on the calendar with an event and view the
                event
              </h4>

              <a
                href="#"
                class="btn btn-white btn-animated"
                onClick={createEvent}
              >
                Create Event
              </a>
              <FormModal
                active={modal}
                action={setModal}
                event={props.createEvent}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
