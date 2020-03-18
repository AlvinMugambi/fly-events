import React from "react";

// reactstrap components

// core components

function EventPageHeader(props) {
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
  return (
    <>
      <div className="page-header page-header-mini">
        <div
          className="page-header-image"
          style={{
            backgroundImage: props.headerImage
              ? "url(" + props.headerImage + ")"
              : "url(" + require("../assets/img/blank-header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default EventPageHeader;
