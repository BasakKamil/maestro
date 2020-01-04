import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

export class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        post: '',
        city: '',
        date: new Date()

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        console.log("No stary zaraz będziesz miał dostęp do Apki Basiego :D");
        this.cancelCourse();
    } 

    cancelCourse = () => { 
         document.querySelector(".whiteForemka").reset();
    }

    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to="/"/>
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
                            <label htmlFor="name">Imie </label>
                            <input type="text" id="name" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="surname">Nazwisko</label>
                            <input type="text" id="surname" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="address">Adres</label>
                            <input type="text" id="address" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="post">Kod Pocztowy XX-XXX </label>
                            <input type="text" id="post" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="city">Miasto </label>
                            <input type="text" id="city" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn btn-success">Zarejstruj się!</button>
                        </div>
                        <div className="errSignUp"> {authError ? <p>{authError}</p>: null }</div>
                        
                    </form>

                </form>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newuser) => dispatch(signUp(newuser))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(SignUp)
