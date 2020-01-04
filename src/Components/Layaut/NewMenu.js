import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NewMenu extends Component {
    render() {
        return (
            <div className="NewM">
                <ul className="InUl">
                    <li><NavLink to="/shop">Sklep</NavLink></li>
                    <li><NavLink to="/about">O Mnie</NavLink></li>
                    <li><NavLink to="/contact">Kontakt</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NewMenu
