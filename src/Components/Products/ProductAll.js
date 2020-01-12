import React, { Component } from 'react';
import ProductDetails from '../Products/ProductDetails';

class ProductAll extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [
                {name: 'stary', section: 'yeaaa' },
                {name: 'Kuba', section: 'kiaaaa' },
            ]
        }
    }

    
render(){   
    
    const {products} = this.props;
    // console.dir(products);
  
   
        if(Array.isArray(products)){
            
            return(
                
                <div>
                {this.props.products && this.props.products.map(product => {
                    return (
                     <ProductDetails product={product}/>
                    ) 
                })}
            </div>
            )
        }
        else return ( <div>Nie ma nic na Stanie!</div>) 
     
    

}
}

export default ProductAll