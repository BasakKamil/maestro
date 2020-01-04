import React from 'react';
import { Link } from 'react-router-dom';
import LinksLoginIn from '../Auth/LinksLoginIn';
import LinksLoginOut from '../Auth/LinksLoginOut';
import { connect } from 'react-redux';

const Navbar = (props) =>{
   const {auth} = props;
   const links = auth.uid ? <LinksLoginIn/> : <LinksLoginOut/> ;
    return(
        <div className="NavbarBasi">
                <nav className="nav-wrapper">
                    <Link to="/">iMjaster</Link>
                    {links}
                </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth
       
    }
}

export default connect(mapStateToProps)(Navbar)

