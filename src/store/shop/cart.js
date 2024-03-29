import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';
import StepOrdertwo from './Stepordertwo';



class Cart extends Component{
    constructor(){
        super();
        this.state={
            stepOrder: 1
        }
        this.order = this.order.bind(this);
    }
   
      //Przejscie dalej
    nextStep = () => {
        const {stepOrder} = this.state;
        this.setState({
            stepOrder: stepOrder + 1
        });
    }

      //Cofnięcie się
    prevStep = () => {
        const {stepOrder} = this.state;
        this.setState({
            stepOrder: stepOrder - 1
        })
    }

  
    total = () =>{
        return this.props.items.reduce((total,item)=>{
            return total + item.price
        },0)
    }

    order = () => {    
       this.props.createOrder(this.props.items)
    }

    render(){
        const {auth} = this.props;
        const {stepOrder} = this.state;
        
        if(!auth.uid) return <Redirect to="/signin" />
        if(this.props.items.length === 0){
            return(
                <div className="NiceBasketNull">Koszyk jest pusty ;(</div>
            )
        } 
        // eslint-disable-next-line default-case
        switch(stepOrder){
            case 1:
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
                            <button className="btn btn-danger" onClick={this.nextStep}>Kup !</button>

                </div>
                )
            case 2:
                return (
                    <StepOrdertwo 
                    order={this.order}
                    items={this.props.items}
                    prevStep ={this.prevStep}
                    nextStep={this.nextStep}
                    profile={this.props.profile}
                    />
                )
            case 3: 
                return(
                    <Redirect to="/ordersum"/>
                )
             }
            
        }

    }

    const mapStateToProps = (state) => {
        return{
            items: state.cart.cart,
            auth: state.firebase.auth,
            profile: state.firebase.profile
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
