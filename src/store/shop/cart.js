import React, { Component } from 'react';





class Cart extends Component{

    total= () =>{
        return this.props.items.reduce((total,item)=>{
            return total + item.price
        },0)
    }

    render(){
        if(this.props.items.length === 0){
            return(
                <div className="NiceBasket">Koszyk jest pusty ;(</div>
            )
        } 
        return (
                <div className="NiceBasket">
                    <table>
                        <tbody>
                            <tr>
                                <th>Nazwa:</th>
                                <th>Cena:</th>
                            </tr>
                            {this.props.items.map((item,index) => {
                                return <tr key={index}>
                                    <td>
                                        <button  className="btn btn-danger" onClick={()=>this.props.removeFromCart(index)}>Usuń</button>
                                    </td>
                                     <td>{item.name}</td>
                                     <td>{item.price}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                            <p className="TotalBasket">
                                    Wszystko : {this.total()} zł
                            </p>

                </div>
        )
       
        }

    }

export default Cart