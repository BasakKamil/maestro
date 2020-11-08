import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class NewMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false
        }
    }
 
   
    render() {
       
        return (
            <div className="NewM">
                <ul className="InUl">
                    <li><NavLink exact to="/shop">Sklep</NavLink></li>
                    <li><NavLink exact to="/about">O Mnie</NavLink></li>
                    <li><NavLink to="/createproject">Zlecenie Naprawy!</NavLink></li> 
                    <li><NavLink exact to="/contact">Kontakt</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NewMenu
