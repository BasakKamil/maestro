import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LinksLoginOut extends Component {
    render() {
        return (
            <div className="LinksOut">
               <ul>
                 <li><Link to="/signin">Zaloguj się!</Link></li>
                 <li><Link to="/signup">Zarejstruj</Link></li> 
               </ul> 
            </div>
        )
    }
}

export default LinksLoginOut
