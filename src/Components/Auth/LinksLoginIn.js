import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const LinksLoginIn = (props) =>{
    
        return (
            <div className="LinksIn">
                <ul>
                 <li><NavLink to="/createproject">Zlecenie Naprawy!</NavLink></li> 
                 <li><button className="btn btn-danger" onClick={props.signOut}>Wyloguj się!</button></li> 
                 <li><NavLink to="/contact">Menu</NavLink></li>
                 
               </ul> 
            </div>
        )
}


const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(LinksLoginIn)
