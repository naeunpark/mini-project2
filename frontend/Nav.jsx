import {useState, useEffect, useSyncExternalStore} from "react";
import {categoriesStore} from "../backend/categoriesApi";
import Session from "react-session-api";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav() {
  const categories = useSyncExternalStore(
    categoriesStore.subscribe,
    categoriesStore.getSnapShot,
  );

  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    let isLoginSession = Session.get("isLogin");
    setisLogin(isLoginSession);
  }, [isLogin]);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container className="justify-content-space-between">
        <Navbar.Brand href="/">Shopping</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav justify-content-flex-end">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              title="Shop"
              id="basic-nav-dropdown"
            >
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.id}
                  href={`/category?category=${category.name}`}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {isLogin ? (
              <Nav.Link href="/logout">Log out</Nav.Link>
            ) : (
              <Nav.Link href="/login">Log in</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
