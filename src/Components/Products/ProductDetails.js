import React, { Component } from 'react';


// import formatCurrency from '../../store/shop/util';

class ProductDetails extends Component{


render(){

const {product} = this.props;
return(
   
    <div className="IteamDetails">  
       <p>Nazwa: {product.name}</p>
       <p>Opis: {product.content}</p>
       <p>Cena: {product.price}</p>

        {/* <p>Cena: {formatCurrency(product.price)}</p> */}
       <button className="btn btn-success" onClick={() => this.props.addToCart(product)} >Add</button>
    </div>
)


}
}

export default ProductDetails