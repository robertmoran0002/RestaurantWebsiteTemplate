import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Navigation() {
    const [category, setCategory] = useState([]);

    async function getCategory() {
        fetch('https://localhost:7046/api/MenuCategories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'XApiKey': 'z!@fjie@39dfH~zFoO91Cd9da!349czD39CzjgopI~GifgRRV4er93*$goCV3!'
            }
        }).then(response => response.json())
            .then(data => setCategory(data))
            .catch((error) => { console.log(error) });
/*        console.log("Pulled data for the header.")*/
    }

    useEffect(() => {
        getCategory()
    }, []);

    var menuDropdown = category.map((catItems) => buildDropdown(catItems));

    function buildDropdown(catItem) {

        return (
            <NavDropdown.Item key={catItem.menuCategoryId }><Link to={"/Category/" + catItem.menuCategoryId} state={{ catId: catItem.menuCategoryId }}>{catItem.menuCategoryName}</Link></NavDropdown.Item>
            )
    }

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Menu" id="navbarMenuDropdown" role="button">
                                {menuDropdown}
                            </NavDropdown>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/About">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}