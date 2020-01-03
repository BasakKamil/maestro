import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LinksLoginOut extends Component {
    render() {
        return (
            <div className="LinksOut">
               <ul>
                 <li><button>Wyloguj się!</button></li>
                 <li><Link to="/createproject">Utwórz Zlecenie</Link></li> 
               </ul> 
            </div>
        )
    }
}

export default LinksLoginOut
