import React, { Component } from 'react'

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
        console.log(this.state);
        this.cancelCourse();
    } 

    cancelCourse = () => { 
         document.querySelector(".whiteForemka").reset();
    }

    render() {
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

                        
                    </form>

                </form>
                
            </div>
        )
    }
}

export default SignIn
