import React from 'react';
import './cartitem.scss';

const CartItem=({item:{name,price,imageUrl,quantity}})=>(
    <div className="cart-item">
    <img src={imageUrl} alt="cartitem"/>
    <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity}x${price}</span></div>
    </div>)

    export default CartItem;