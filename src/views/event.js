import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  Collapse,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import Comments from "../components/comments";
import Footer from "../components/Footer";
import DropdownFixedNavbar from "../components/navbar";

// core components
import EventPageHeader from "../components/eventPageHeader";
import moment from "moment";

const items = [
  {
    src: require("../assets/img/blank.jpg"),
    altText: "",
    caption: ""
  }
];

function ProductPage(props) {
  // carousel states and functions
  const { eventData } = props.location.state;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    if (eventData.eventImages) {
      const nextIndex =
        activeIndex === eventData.eventImages.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    } else {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  };
  const previous = () => {
    if (animating) return;
    if (eventData.eventImages) {
      const nextIndex =
        activeIndex === 0 ? eventData.eventImages.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    } else {
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // select states and functions
  const [colorSelect, setColorSelect] = React.useState(null);
  const [sizeSelect, setSizeSelect] = React.useState(null);
  React.useEffect(() => {
    document.body.classList.add("product-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("product-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <DropdownFixedNavbar />
      <div className="wrapper">
        <EventPageHeader headerImage={eventData.image} />
        <div className="section">
          <Container>
            <Row>
              <Col md="5">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={eventData.eventImages || items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {eventData.eventImages
                    ? eventData.eventImages.map(item => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img
                              src={item.src}
                              alt={item.altText}
                              className="d-block img-raised"
                            />
                          </CarouselItem>
                        );
                      })
                    : items.map(item => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img
                              src={item.src}
                              alt={item.altText}
                              className="d-block img-raised"
                            />
                          </CarouselItem>
                        );
                      })}
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="now-ui-icons arrows-1_minimal-right"></i>
                    </Button>
                  </a>
                </Carousel>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title">{eventData.title}</h2>
                <h5 className="category">The annual color festival</h5>
                <h2 className="main-date">
                  {moment(eventData.date).format("LL")}
                </h2>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <a
                        aria-expanded={collapses.includes(1)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          changeCollapse(1);
                        }}
                      >
                        Description{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        <p>{eventData.description}</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingTwo" role="tab">
                      <a
                        aria-expanded={collapses.includes(2)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          changeCollapse(2);
                        }}
                      >
                        Organizer Information{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(2)}>
                      <CardBody>
                        <p>{eventData.eventOwner}</p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingThree" role="tab">
                      <a
                        aria-expanded={collapses.includes(3)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          changeCollapse(3);
                        }}
                      >
                        Location Details{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(3)}>
                      <CardBody>
                        <ul>
                          <li>Location: {eventData.location}</li>
                          <li>Start Time: {eventData.startTime}</li>
                          <li>End Time: {eventData.endTime}</li>
                        </ul>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingThree" role="tab">
                      <a
                        aria-expanded={collapses.includes(4)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          changeCollapse(4);
                        }}
                      >
                        Share{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={!collapses.includes(4)}>
                      <CardBody>
                        <img src={require("../assets/img/fb.png")} />
                        <img src={require("../assets/img/twitter.png")} />
                        <img src={require("../assets/img/ig.png")} />
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingThree" role="tab">
                      <a
                        aria-expanded={collapses.includes(5)}
                        data-parent="#accordion"
                        data-toggle="collapse"
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          changeCollapse(5);
                        }}
                      >
                        Send Invite{" "}
                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                      </a>
                    </CardHeader>
                    <Collapse isOpen={!collapses.includes(5)}>
                      <CardBody>
                        <img
                          style={{ marginRight: "20px" }}
                          src={require("../assets/img/phone.png")}
                        />

                        <img src={require("../assets/img/gmail.png")} />
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <Row className="justify-content-end">
                  <Button className="mr-3" color="info">
                    Edit Event
                  </Button>
                </Row>
              </Col>
            </Row>
            <Comments />
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
