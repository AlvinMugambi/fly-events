import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function DropdownFixedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <img
              style={{ width: "104px", height: "130px" }}
              src={require("../assets/img/fly.png")}
            />
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
              style={{ fontSize: "20px" }}
            >
              Fly Events Inc.
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Designed by Alvin.
            </UncontrolledTooltip>
          </div>
          <Nav className="ml-auto" id="ceva" navbar>
            <NavItem style={{ margin: "10px" }}>
              <p>About Us</p>
            </NavItem>
            <NavItem></NavItem>
            <NavItem style={{ margin: "10px" }}>
              <p>Contact Us</p>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownFixedNavbar;
