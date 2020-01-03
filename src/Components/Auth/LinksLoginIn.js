import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export class LinksLoginIn extends Component {
    render() {
        return (
            <div className="LinksIn">
                <ul>
                 <li><NavLink to="/createproject">Zlecenie Naprawy!</NavLink></li> 
                 <li><NavLink to="/">Wyloguj się!</NavLink></li> 
                 <li><NavLink to="/contact">Menu</NavLink></li>
                 
               </ul> 
            </div>
        )
    }
}

export default LinksLoginIn
