import React from 'react';
import './checkoutpage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectTotalPrice} from '../../Components/Cart-Icon/Cart-icon-selector';
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem';
const CheckOutPage=({cartItems,totalPrice})=>{
    return(<div className="checkout-page">
    <div className="checkout-header">
    <div className="header-block"><span>Product</span></div>
    <div className="header-block name"><span>Description</span></div>
    <div className="header-block quantity"><span>Quantity</span></div>
    <div className="header-block price"><span>Price</span></div>
    <div className="header-block"><span>Remove</span></div>
    </div>
    {cartItems.map(cartItem=><CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className="total"><span>Total:{totalPrice>0?totalPrice:null}$</span></div></div>)
}

const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
totalPrice:selectTotalPrice
})
export default connect(mapStateToProps)(CheckOutPage);