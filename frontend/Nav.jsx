import { useSyncExternalStore } from "react"
import { categoriesStore } from "../backend/categoriesApi"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav(){
    const categories = useSyncExternalStore(categoriesStore.subscribe, categoriesStore.getSnapShot)

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
                {categories.map(category =><NavDropdown.Item key={category.id} href={`/category?category=${category.name}`}>{category.name}</NavDropdown.Item>)}
              
              </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MyNav