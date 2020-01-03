import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class LinksLoginIn extends Component {
    render() {
        return (
            <div className="LinksIn">
                <ul>
                 <li><Link to="/">Logo</Link></li> 
                 <li><Link to="">Zarejstruj się</Link></li> 
               </ul> 
            </div>
        )
    }
}

export default LinksLoginIn
