import React from 'react';
import {ReactComponent as ShoppingBag} from '../../Assets/ShoppingBag.svg';
import {connect} from 'react-redux';
import {toggleDDAction} from '../../Redux/Cart-DropDown/Cart-DropDownaction'
import './cart-icon.scss';
const CartIcon=({toggleDD})=>{
    return(<div className='cart-icon' onClick={toggleDD}>
    <ShoppingBag className='shopping-icon'/>
    <span className='item-count'>0</span>
        
        </div>)

}
const mapDispatchToProps=(dispatch)=>({
    toggleDD:()=>{dispatch(toggleDDAction())}
})

export default connect(null,mapDispatchToProps)(CartIcon);