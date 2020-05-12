import React from 'react';
import {ReactComponent as ShoppingBag} from '../../Assets/ShoppingBag.svg';
import {connect} from 'react-redux';
import {toggleDDAction} from '../../Redux/Cart-DropDown/Cart-DropDownaction';

import {selectItemCount} from './Cart-icon-selector'
import './cart-icon.scss';
const CartIcon=({toggleDD,itemCount})=>{
    return(<div className='cart-icon' onClick={toggleDD}>
    <ShoppingBag className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
       </div>)

}
const mapDispatchToProps=(dispatch)=>({
    toggleDD:()=>{dispatch(toggleDDAction())}
})
const mapStateToProps=(state)=>{
    console.log("itemcount");
    return {
    itemCount:selectItemCount(state)
}}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);