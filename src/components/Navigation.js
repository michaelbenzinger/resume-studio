import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Navigation(props) {
  const { title } = props;
  return (
    <Navbar color="dark" expand="sm" container="sm" dark>
      <NavbarBrand href="/">{title}</NavbarBrand>
    </Navbar>
  );
}
