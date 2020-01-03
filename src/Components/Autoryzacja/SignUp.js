import React, { Component } from 'react'

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

                        
                    </form>

                </form>
                
            </div>
        )
    }
}

export default SignUp
