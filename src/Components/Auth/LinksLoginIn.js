import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import NewMenu from '../Layaut/NewMenu';





class LinksLoginIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false
        }
    }

    toogle = e =>{
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
      }));
    }
    
    render(){
 
   
        return (
            <div className="LinksIn">
                <ul>
                 <li><NavLink to="/createproject">Zlecenie Naprawy!</NavLink></li> 
                 <li><button className="btn btn-primary" onClick={this.props.signOut}>Wyloguj się!</button></li> 
                 <li><button onClick={this.toogle}>Menu</button></li>
                
                
               </ul> 
               {this.state.isToggleOn ? <NewMenu toogle={this.toogle}/> : null}
            </div>
        )
}
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
        
    }
}

export default connect(null,mapDispatchToProps)(LinksLoginIn)
