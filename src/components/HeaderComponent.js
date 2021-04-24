import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, Button} from 'reactstrap';
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
                <div className="container flex-container">
                    <NavbarToggler onClick={ this.togglerNav } />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <>
                            <div className="flex-container">
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <h5 className='nav-listing'>Home</h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <h5 className='nav-listing'>Sports</h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <h5 className='nav-listing'>Schedule</h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <h5 className='nav-listing'>Order</h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <Button className='register_button' >Register</Button>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/home'>
                                            <div className="">
                                            <Button className='login_button'>Login</Button>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;