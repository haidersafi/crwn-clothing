import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../Custom-Button/CustomButton'

const CartDropdown=()=>(
    <div class='cart-dropdown'>
    <div class="cart-items"></div>
    <CustomButton>CHECKOUT</CustomButton>
    </div>
)
export default CartDropdown;

