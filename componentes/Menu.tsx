import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Menu: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Loja de Livros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/livros" passHref>
              <Nav.Link>Livros</Nav.Link>
            </Link>
            <Link href="/livros/novo" passHref>
              <Nav.Link>Cadastrar Livro</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
