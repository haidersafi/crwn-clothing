import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../Custom-Button/CustomButton';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../Cart-Icon/Cart-icon-selector'
const CartDropdown=({item})=>(
    <div className='cart-dropdown'>
    <div className="cart-items">
    {item.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)}
    </div>

    <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=(state)=>({
item:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);

