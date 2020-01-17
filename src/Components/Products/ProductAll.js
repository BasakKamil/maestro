import React, { Component } from 'react';
import ProductDetails from '../Products/ProductDetails';

class ProductAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            products :  [],
           
        }
        
    }

total(){
        return this.props.reduce((total,product)=>{
            return total + product.price
        },0)
} 
    


render(){  
    
    const {products} = this.props;

   
        if(Array.isArray(products)){
            
            return(
                
                <div className="ProductShow">
                {this.props.products && this.props.products.map(product => {
                    return (
                     <ProductDetails product={product} addToCart={this.props.addToCart} key={product.id} />
                    ) 
                })}
            </div>
            )
        }
        else return ( <div>Nie ma nic na Stanie!</div>) 
     
    

}
}

export default ProductAll