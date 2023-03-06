import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";
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
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={headerlogo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
      </Container>
      <Container className="text-center">
        {/* <img src={headerlogo} width="100" height="100" /> */}
        {/* <div className="HeadingTitle">
          <h3>CRUDNEWSAPP</h3>
        </div> */}
      </Container>
      <Container>
        <Navbar.Collapse className="justify-content-end">
          {auth.user ? (
            <>
              {" "}
              <Navbar.Text>Logged in as {auth.user.username}</Navbar.Text>
              <br />
              <Button onClick={signOut} variant="secondary" size="lg" active>
                Logout
              </Button>
            </>
          ) : (
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
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
