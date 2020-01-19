import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createOrder} from '../actions/createOrder';



class Ordersum extends Component{
    render(){
        return(
            <div className="SumOrderKamila">
                Podsumoawnie Zamowienia :D
            </div>
        )
    
    }
    }
 

const mapStateToProps= (state) =>{
    return{
        items: state.cart.cart,
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createOrder: (order) =>  dispatch(createOrder(order))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ordersum)