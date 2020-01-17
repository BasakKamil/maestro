import React, { Component } from 'react';
import ProductDetails from '../Products/ProductDetails';

class ProductAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            products :  [],
           
        }
        
    }

   
    
    handleAddToCard = (e,product) => {
        console.log(product.name + e);
    }
    kmail= (e) => {
        console.log('kurde');
    }

render(){  
    
    const {products} = this.props;

   
        if(Array.isArray(products)){
            
            return(
                
                <div>
                {this.props.products && this.props.products.map(product => {
                    return (
                     <ProductDetails product={product} addToCart={this.props.addToCart} key={product.id} kamil={this.kamil}/>
                    ) 
                })}
            </div>
            )
        }
        else return ( <div>Nie ma nic na Stanie!</div>) 
     
    

}
}

export default ProductAll