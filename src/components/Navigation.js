import { Navbar, Nav, NavLink, NavItem, NavbarBrand } from 'reactstrap';

export default function Navigation(props) {
  const { title } = props;
  return (
    <Navbar color="dark" dark expand="xs" container="sm">
      <NavbarBrand className="me-auto">{title}</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink
            onClick={() => {
              window.print();
            }}
          >
            <i class="fas fa-print"></i>
            <span>Print</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            target="_blank"
            rel="noreferrer"
            href="https://github.com/michaelbenzinger"
          >
            <i class="fab fa-github"></i>

            <span>GitHub</span>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
