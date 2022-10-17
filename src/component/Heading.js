import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Heading = () => {
    return (
        <div>
            <Navbar color="dark" dark>
                <Container style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <NavbarBrand href='/'>My Team</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link to='/add' className='btn btn-primary'>Add User</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heading;