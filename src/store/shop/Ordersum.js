import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';



class Ordersum extends Component{

    state = {
        description: {}
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        
    } 
    order = () =>{
        this.props.createOrder(this.props.items,this.state.description);
    }
    render(){
        const {auth} = this.props;
        const {items} = this.props;
        const {profile} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        if(items.length===0) return <Redirect to="/shop" />
        return(
            <div className="SumOrderKamila">
               <p className="CallOrder">Podsumoawnie Zamowienia :D</p> 
                <table className="OrderSum">
                    <tbody>
                        <tr>
                            <td>Nazwa</td>
                            <td>Cena</td>
                            <td>Sztuk</td>
                        </tr>
                        {items.map((item,index)=>{
                            return(
                                <tr key={index}>
                                     <td>{item.name}</td>           
                                     <td>{item.price}</td>
                                     <td></td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
                <table className="InfoProfile">
                    <tbody>
                        <tr>
                             <td>Imie i Nazwisko: </td>
                             <td>{profile.name} {profile.surname}</td>
                        </tr>
                        <tr>
                             <td>Ulica: </td>
                             <td>{profile.address}</td>
                        </tr>
                        <tr>
                             <td>Kod Pocztowy: </td>
                             <td>{profile.post}</td>
                        </tr>
                        <tr>
                             <td>Miasto: </td>
                             <td>{profile.city}</td>
                        </tr>
                        <tr>
                             <td>Telefon: </td>
                             <td>{profile.phone}</td>
                        </tr>
                        <tr>
                            <td>Dodatkowe info:</td>
                            <td><textarea onChange={this.handleChange("description")} className="Description"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                    <button onClick={this.order} className="btn btn-success">Zamów</button>

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
        createOrder: (order, description) =>  dispatch(createOrder(order,description))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ordersum)