import React from 'react';
// import formatCurrency from '../../store/shop/util';

const ProductDetails = (props) => {
const {product} = props;
const {handleAddToCard} = props;
console.log(handleAddToCard);



return(
    <div className="IteamDetails">  
       <p>Nazwa: {product.name}</p>
       <p>Opis: {product.content}</p>
       <p>Cena: {product.price}</p>
        {/* <p>Cena: {formatCurrency(product.price)}</p> */}
       <button className="btn btn-success" onClick={(e) => this.props.handleAddToCard(e,product)} >Add</button>
    </div>
)


}

export default ProductDetails