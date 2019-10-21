import React from 'react'
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

import "../App.css"

export const Header = () => {

    return (

        <Navbar
            className='nav-bar'
        >
            <NavbarBrand href="/">
                Shop now
            </NavbarBrand>

            <NavbarBrand href="/">
                my account
            </NavbarBrand>

            <NavbarBrand href="/">
                Shopping Cart
            </NavbarBrand>

            <NavbarBrand href="/">
                About Us
            </NavbarBrand>

            <NavbarBrand href="/">
                Contact
            </NavbarBrand>



        </Navbar>
    )
}