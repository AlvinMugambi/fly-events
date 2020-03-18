import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";

// core components

function Cards(props) {
  return (
    <>
      <div
        className="section section-cards"
        data-background-color="gray"
        id="cards"
        style={
          props.events.length === 1
            ? {
                backgroundImage: props.events[0].image
                  ? "url(" + props.events[0].image + ")"
                  : "url(" + require("../assets/img/blank-header.jpg") + ")",
                backgroundSize: "cover",
                imageResolution: "from-image"
              }
            : null
        }
      >
        <div className="cards">
          <Container>
            <Row style={{ justifyContent: "center" }}>
              {props.events.map(event => (
                <Col className="offset-md-2 offset-lg-0" lg="4" md="8">
                  <Link
                    to={{
                      pathname: "/event",
                      state: {
                        eventData: event
                      }
                    }}
                  >
                    <Card className="card-blog">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img rounded"
                          src={event.image || require("../assets/img/pic5.jpg")}
                        ></img>
                      </div>
                      <CardBody>
                        <h6 className="category text-warning">
                          <i className="now-ui-icons media-1_camera-compact"></i>{" "}
                          PARTY
                        </h6>
                        <CardTitle tag="h5">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {event.title}
                          </a>
                          <p style={{ fontSize: "16px", marginTop: "8px" }}>
                            {event.location}
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              marginTop: "8px",
                              color: "black"
                            }}
                          >
                            {moment(event.date).format("LL")}
                          </p>
                        </CardTitle>
                        <CardFooter>
                          <div className="stats stats-right">
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                            342 ·{" "}
                            <i className="now-ui-icons files_single-copy-04"></i>
                            45
                          </div>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("../assets/img/james.jpg")}
                            ></img>
                            <span>{event.eventOwner}</span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Cards;
