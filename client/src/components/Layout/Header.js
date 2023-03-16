import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerlogo from "../../assests/headerlogo.png";
import "../../styles/Header.css";

import useAuth from "../../hooks/useAuth";

const Header = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  const signOut = () => {
    auth.signOut(() => navigate("/"));
  };

  return (
    <Navbar className="me-auto">
      <Container className="justify-content-start">
        <Navbar.Brand as={Link} to="/">
          <img
            src={headerlogo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
          CRUDNEWSAPP
        </Navbar.Brand>
      </Container>
      <Container fluid="md">
        <Navbar.Collapse className="justify-content-end">
          {auth.user ? (
            <>
              {" "}
              <Row>
                <Col md="auto">
                  <p style={{}}>Logged in as {auth.user.username}</p>
                </Col>
                <Col md="auto">
                  <Button
                    onClick={signOut}
                    variant="secondary"
                    size="lg"
                    active
                  >
                    Logout
                  </Button>
                </Col>
              </Row>
            </>
          ) : (
            <>
              {" "}
              <Row>
                <Col md="auto">
                  <Link to="/sign-up">
                    <Button
                      type="button"
                      className="btn custom-button"
                      variant="dark"
                      size="lg"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Col>
                <Col md="auto">
                  <Link to="/login">
                    <Button
                      type="button"
                      className="btn custom-button"
                      variant="outline-light"
                      size="lg"
                    >
                      Sign In
                    </Button>
                  </Link>
                </Col>
              </Row>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
