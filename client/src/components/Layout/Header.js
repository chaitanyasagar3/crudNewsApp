import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerlogo from "../../assests/headerlogo.png";
import "./Header.css";

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
          <img src={headerlogo} width="100" height="100" />
        </Container>
        <Container>
        <Navbar.Collapse className="justify-content-end">
          {auth.user ?  <> <p>Logged in as {auth.user.username}</p>
        <button onClick={signOut}>Logout</button></> : <Link to="/login"><button type="button">Sign In</button></Link> }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default Header;
