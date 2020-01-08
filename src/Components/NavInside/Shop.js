import React, { Component } from 'react'

export class Shop extends Component {


    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    componentDidMount(props){
        console.log(props)
    }
    render() {
        return (
            <div>
                Sklep
            </div>
        )
    }
}

export default Shop
