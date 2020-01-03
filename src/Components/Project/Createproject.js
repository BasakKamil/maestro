import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        title: '',
        content: '',
        select: [],
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
                        <h5>Zgłoś usterkę swojego sprzętu !</h5>
                        <div className="input-field">
                            <label htmlFor="title"> Model sprzętu </label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Co sie dokładnie wydarzyło? </label>
                            <textarea type="text" id="content" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="select">Oczekuje: </label>
                            <select id="select" onChange={this.handleChange}>
                                <option>Wymiana Ekranu</option>
                                <option>Wymiana Baterii</option>
                                <option>Wymiana innych Podzespołów</option>
                                <option>Płukanie po zalaniu</option>
                                <option>Nie do końca wiem</option>
                                <option>Inne</option>
                            </select>
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
