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




const  App = () => {

    const onClickButton = () => {
        console.log('GGWP')
    }

    return (
        <div>
            <Header/>
        </div>
    )

}



export default App;


