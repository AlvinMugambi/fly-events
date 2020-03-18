import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Input,
  Media,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
// import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
// import BlogPostHeader from "components/Headers/BlogPostHeader.js";
// import FooterBlack from "components/Footers/FooterBlack.js";

function BlogPost() {
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <div className="section section-comments">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div className="media-area">
                    <h3 className="title text-center">3 Comments</h3>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("../assets/img/james.jpg")}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          Tina Andrew{" "}
                          <small className="text-muted">· 7 minutes ago</small>
                        </Media>
                        <p>
                          Chance too good. God level bars. I'm so proud of
                          @LifeOfDesiigner #1 song in the country. Panda! Don't
                          be scared of the truth because we need to restart the
                          human foundation in truth I stand with the most
                          humility. We are so blessed!
                        </p>
                        <p>
                          All praises and blessings to the families of people
                          who never gave up on dreams. Don't forget, You're
                          Awesome!
                        </p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip963306905"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip963306905"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            243
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("../assets/img/michael.jpg")}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          John Camber{" "}
                          <small className="text-muted">· Yesterday</small>
                        </Media>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>Don't forget, You're Awesome!</p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip319050281"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip319050281"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            25
                          </Button>
                        </div>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                className="img-raised"
                                object
                                src={require("../assets/img/julie.jpg")}
                              ></Media>
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              Tina Andrew{" "}
                              <small className="text-muted">· 2 Days Ago</small>
                            </Media>
                            <p>
                              Hello guys, nice to have you on the platform!
                              There will be a lot of great stuff coming soon. We
                              will keep you posted for the latest news.
                            </p>
                            <p>Don't forget, You're Awesome!</p>
                            <div className="media-footer">
                              <Button
                                className="btn-neutral pull-right"
                                color="info"
                                href="#pablo"
                                id="tooltip70762922"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-1_send"></i> Reply
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip70762922"
                              >
                                Reply to Comment
                              </UncontrolledTooltip>
                              <Button
                                className="btn-neutral pull-right"
                                color="danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                                2
                              </Button>
                            </div>
                          </Media>
                        </Media>
                      </Media>
                    </Media>
                  </div>
                  <h3 className="title text-center">Post your comment</h3>
                  <Media className="media-post">
                    <a
                      className="pull-left author"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          object
                          src={require("../assets/img/olivia.jpg")}
                        ></Media>
                      </div>
                    </a>
                    <Media body>
                      <Input
                        placeholder="Write a nice reply or go home..."
                        rows="4"
                        type="textarea"
                      ></Input>
                      <div className="media-footer">
                        <Button
                          className="pull-right"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="now-ui-icons ui-1_send"></i> Reply
                        </Button>
                      </div>
                    </Media>
                  </Media>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
