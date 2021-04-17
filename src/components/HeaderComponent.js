import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <Navbar sticky='top' expand='md'>
                <div className="container">
                    <NavbarToggler onClick={ this.togglerNav } />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <h5>Home</h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <h5>Sports</h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <h5>Schedule</h5>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <h5>Order</h5>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;