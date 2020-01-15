import React, { Component } from 'react';
import ProductDetails from '../Products/ProductDetails';

class ProductAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            products :  []
            
        }
    }
   
   
    
render(){   
    
    const {products} = this.props;
  
   
        if(Array.isArray(products)){
            
            return(
                
                <div>
                {this.props.products && this.props.products.map(product => {
                    return (
                     <ProductDetails product={product} handleAddToCard={this.props.handleAddToCard} key={product.id}/>
                    ) 
                })}
            </div>
            )
        }
        else return ( <div>Nie ma nic na Stanie!</div>) 
     
    

}
}

export default ProductAll