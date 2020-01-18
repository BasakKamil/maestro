import React, { Component } from 'react';
import { connect } from 'react-redux';




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
                                        <button  className="btn btn-dark" onClick={()=>this.props.removeFromCart(index)}>Usuń</button>
                                    </td>
                                     <td>{item.name}</td>
                                     <td>{item.price} zł</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                            <p className="TotalBasket">
                                    Wszystko : {this.total()} zł
                            </p>
                            <button className="btn btn-danger">Kup !</button>

                </div>
        )
       
        }

    }

    const mapStateToProps = (state) => {
        return{
            items: state.cart.cart
        }
    }

    const mapDispatchToProps = (dispatch) => {
       
        return{
            removeFromCart : (index) => {
                dispatch({
                    type: 'REMOVE_FROM_CART',
                    index
                })
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
