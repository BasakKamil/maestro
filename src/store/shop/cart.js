import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';



class Cart extends Component{
  
    total = () =>{
        return this.props.items.reduce((total,item)=>{
            return total + item.price
        },0)
    }

    order = () => {    
       this.props.createOrder(this.props.items)
       console.log(this.props)
    }

    render(){
        const {auth} = this.props;
        
        if(!auth.uid) return <Redirect to="/signin" />
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
                                <b>  Wszystko : {this.total()} zł</b>
                            </p>
                            <button className="btn btn-danger" onClick={this.order}>Kup !</button>

                </div>
        )
       
        }

    }

    const mapStateToProps = (state) => {
        return{
            items: state.cart.cart,
            auth: state.firebase.auth
        }
    }

    const mapDispatchToProps = (dispatch) => {
       
        return{
            removeFromCart : (index) => {
                dispatch({
                    type: 'REMOVE_FROM_CART',
                    index
                })
            },
            createOrder: (order) =>  dispatch(createOrder(order))
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
