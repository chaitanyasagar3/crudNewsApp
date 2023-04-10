import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import headerlogo from "../../assests/headerlogo.png";
import "../../styles/Header.css";
import SettingsModal from "../Settings/SettingsModal";
import { updatePreferences } from "../../api/auth";
import { MdLogout, MdSettings, MdRefresh, MdLogin } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";

import useAuth from "../../hooks/useAuth";

const Header = () => {
  let auth = useAuth();
  let navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const categories = [
    "home",
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleSettingsSubmit = async (categories) => {
    try {
      const response = await updatePreferences(auth.user._id, categories);
      auth.updatePreferences(response);
    } catch (error) {
      console.log(error);
    }
    setShowSettings(false);
  };

  const handleSettingsCancel = () => {
    setShowSettings(false);
  };

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
      <Container fluid="md-auto" >
        <Navbar.Collapse className="justify-content-end">
          {auth.user ? (
            <>
              <Stack gap={2} alignItems="flex-end">
                <div>
                  <Stack gap={1} direction="horizontal">
                    <div sm md="auto">
                      <Button 
                        size="lg"
                        onClick={() => auth.setRefreshArticles(true)}
                      >
                        <MdRefresh data-testid="refresh-button"/>
                      </Button>
                    </div>
                    <div sm md="auto">
                      <Button data-testid="settings-button" 
                        size="lg" onClick={() => setShowSettings(true)}>
                          <MdSettings />
                      </Button>
                    </div>
                    <div md="auto">
                      <Button data-testid="logout-button" onClick={signOut} size="lg">
                        <MdLogout />
                      </Button>
                    </div>
                  </Stack>
                </div>
                <div>
                  <p style={{textAlign: 'center',WebkitTextStrokeWidth: 'thin'}}>Welcome, {auth.user.username}!</p>
                </div>
              </Stack>

              <SettingsModal
                show={showSettings}
                onHide={handleSettingsCancel}
                onSubmit={handleSettingsSubmit}
              />
            </>
          ) : (
            <>
              {" "}
              <Stack gap={1} direction="horizontal">
                <div>
                  <Button
                    data-testid="refresh-button"
                    size="lg"
                    onClick={() => auth.setRefreshArticles(true)}
                  >
                    <MdRefresh />
                  </Button>
                </div>
                <div className="mx-auto">
                  <Link to="/sign-up">
                    <Button
                      type="button"
                      className="btn custom-button"
                      variant="dark"
                      size="lg"
                    >
                      Sign Up <BiUserPlus />
                    </Button>
                  </Link>
                </div>
                <div className="md-auto">
                  <Link to="/login">
                    <Button size="lg">
                      Login <MdLogin data-testid="login-icon" />
                    </Button>
                  </Link>
                </div>
              </Stack>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
