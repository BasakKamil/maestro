import React from 'react';
import { Link } from 'react-router-dom';
import LinksLoginIn from '../Auth/LinksLoginIn';
import LinksLoginOut from '../Auth/LinksLoginOut';

const Navbar = () =>{
    return(
        <div className="NavbarBasi">
                <nav className="nav-wrapper">
                    <Link to="/">iMjaster</Link>
                    <LinksLoginIn/>
                    <LinksLoginOut/>
                </nav>
        </div>
    )
}

export default Navbar