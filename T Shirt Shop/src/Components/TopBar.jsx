import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {GiPoloShirt} from 'react-icons/gi'

const TopBar= ()=>{
    return(
    <>
    <Navbar bg="dark" variant="dark" expand ="lg">
        <Container fluid>
            <h6 className="text-light" >
                <GiPoloShirt className="text-warning"/> &nbsp;&nbsp;&nbsp;
                
        Free Delivery on Order above 500/- Rupees</h6>
            <Nav className ="ms-auto">
                <LinkContainer to="/" activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName>
                    <Nav.Link>Contact Us </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policies" activeClassName>
                    <Nav.Link>Terms And Policies</Nav.Link>
                </LinkContainer>

            </Nav>
        </Container>
    </Navbar>
    
    
    
    
    </>

    )
}
export default TopBar