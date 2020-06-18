import React from 'react';
import './checkoutitem.scss';
import {removeItem,addItem,reduceItemQuantity} from '../../Redux/Cart-DropDown/Cart-DropDownaction'
import {connect} from 'react-redux';

const CheckOutItem=({cartItem,dispatch})=>{
    const {name,quantity,price,imageUrl}=cartItem;
    return(<div className="checkoutitem">
    <div className="image-container"><img src={imageUrl} alt="item"/></div>
    <span className="name">{name}</span>
    <span className="quantity"><span class="arrow" onClick={()=>dispatch(reduceItemQuantity(cartItem))}>&#10094;</span><span className="value">{quantity}</span><span class="arrow" onClick={()=>{dispatch(addItem(cartItem))}}>&#10095;</span></span>
    <span className="price">{price}</span>
    <span className="remote-button" onClick={()=>dispatch(removeItem(cartItem))}>&#10005;</span>
        </div>)

        
}


export default connect(null)(CheckOutItem);