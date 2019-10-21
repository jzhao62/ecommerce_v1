import React  from 'react';
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
import {Header} from "./components/Header";

import "./App.css"

const logo = require('./skyrich.png')



const  App = () => {

    const onClickButton = () => {
        console.log('GGWP')
    }

    return (
        <div>
            <div className='App-title'>
                <img src={logo} className='App-logo'/>
            </div>
            <Header/>
        </div>
    )

}



export default App;


