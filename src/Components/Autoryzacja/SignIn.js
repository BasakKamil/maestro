import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        
    } 

    // cancelCourse = () => { 
    //      document.querySelector(".whiteForemka").reset();
    // }

    render() {
        const {auth,authError} = this.props;
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container FormKamil">
                <form>
                    <form onSubmit={this.handleSubmit} className="whiteForemka">
                        <h5>Zaloguj się !</h5>
                        <div className="input-field">
                            <label htmlFor="email"> Podaj Email </label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Podaj Hasło </label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn btn-success">Zaloguj się!</button>
                        </div>
                        <p className="ErrorInfo">
                         {authError ? <p>{authError}</p> : null}
                        </p>

                        
                    </form>

                </form>
                
            </div>
        )
    }
}
const mapStateToProps= (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
