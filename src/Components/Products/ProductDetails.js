import React, { Component } from 'react';


// import formatCurrency from '../../store/shop/util';

class ProductDetails extends Component{
total(){
        return this.props.reduce((total,product)=>{
            return total + product.price
        },0)
}

render(){

const {product} = this.props;
return(
   
    <div className="IteamDetails">  
       <p>Nazwa: {product.name}</p>
       <p>Opis: {product.content}</p>
       <p>Cena: {product.price}</p>

        {/* <p>Cena: {formatCurrency(product.price)}</p> */}
       <button className="btn btn-success" onClick={(e) => this.props.addToCart(product)} >Add</button>
    </div>
)


}
}

export default ProductDetails