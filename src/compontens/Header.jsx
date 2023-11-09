import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import imglog from "../assint/images/logo.png";
import { AuthContext } from "../AuthContext";
const Header = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as="span" className="Nav">
              <Link to="/">
                <img src={imglog} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as="span">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link to="/blog">Blog</Link>
              </Nav.Link>
              {isAuth ? (
                <>
                  <Nav.Link as="span">
                    <Link to="/blog/new">New post</Link>
                  </Nav.Link>
                  <Link to="/login">
                    <button
                      onClick={logout}
                      className="btn btn-outline-danger text-center"
                    >
                      logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Nav.Link as="span">
                    <Link to="/login">login</Link>
                  </Nav.Link>
                  <Nav.Link as="span">
                    <Link to="/signup">Signup</Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
