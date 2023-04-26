import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/form" className="link">Add new product</NavLink>
                    <NavLink to="/table" className="link">Available products table</NavLink >
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation;