import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../Custom-Button/CustomButton';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../Cart-Icon/Cart-icon-selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router';
import {toggleDDAction} from '../../Redux/Cart-DropDown/Cart-DropDownaction';

const CartDropdown=({item,history,dispatch})=>(
    <div className='cart-dropdown'>
    <div className="cart-items">
    {item.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)}
    </div>

    <CustomButton onClick={()=>{history.push('/checkout');dispatch(toggleDDAction());}}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector({
item:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

