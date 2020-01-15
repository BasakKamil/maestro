import React, {  Component } from 'react';
// import {TweenMax, Power3} from 'gsap';
// import logo from '../../images/star.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductAll from '../Products/ProductAll';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
// import Filter from '../../store/shop/filter';



class Shop extends Component{

    state ={
        products: [],
        filteredProducts:[]
    }
    // const logoItem = useRef(null);
    // const textItem = useRef(null);
    
    //     useEffect(() => {
           
    //         return () => {
    //             TweenMax.to(
    //                 this.logoItem,
    //                  .8, 
    //                  {
    //                      opacity: 1, 
    //                      y: -20,
    //                      ease: Power3.easeOut
    //                 })
    //             TweenMax.to(
    //                    this.textItem,
    //                      .8, 
    //                      {
    //                          opacity: 1, 
    //                          y: -20,
    //                          ease: Power3.easeOut,
    //                          delay: .2
    //             })
    //         };
    //     }, [])
    handleAddToCard = (e,product) => {
        console.log(product.name + e);
    }
   
        render(){
        const {auth} = this.props;
        const {products} = this.props;
            
            if(!auth.uid) return <Redirect to="/signin" />
            return (
                <div className="ShopKamila">
                    {/* <img src={logo} alt="" /> */}
                    {/* <Filter> */}
                           <ProductAll products={products} handleAddToCard={this.handleAddToCard}/>
                    {/* </Filter> */}
                </div>
                
            )
        
       
     


            }
        }
const mapStateToProps = (state,ownProps) => {
   
    const products = state.firestore.ordered.products;
 

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        products: products
       
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(Shop)
