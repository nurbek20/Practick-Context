import React, {useContext} from 'react'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { MyContext } from '../../Context/My-context';

const Header = () => {
  const {cart}=useContext(MyContext)
  return (
    <Navbar bg="light " expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Internet Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="cart">Cart {cart.length}</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
