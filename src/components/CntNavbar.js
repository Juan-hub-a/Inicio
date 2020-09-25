import React, { Component } from "react";
import { Navbar, Button, FormControl, Nav, Form } from "react-bootstrap";

export default class CntNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">ClaimMedication</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Acceso">Acceso</Nav.Link>
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#Preguntas">Preguntas</Nav.Link>
            <Nav.Link href="#COnsultar">Consultar medicamento</Nav.Link>
            <Nav.Link href="#Manual">Manual de claimMedication</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
}
