import React from 'react';

const ProductDetails = (props) => {
const {product} = props;
console.log(product);
return(
    <div className="IteamDetails">  
       <p>Nazwa: {product.name}</p>
       <p>Opis: {product.content}</p>
       <p>Cena: {product.price}</p>
    </div>
)


}

export default ProductDetails