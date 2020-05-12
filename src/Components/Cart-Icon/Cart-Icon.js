import React from 'react';
import {ReactComponent as ShoppingBag} from '../../Assets/ShoppingBag.svg';
import {connect} from 'react-redux';
import {toggleDDAction} from '../../Redux/Cart-DropDown/Cart-DropDownaction';
import {createStructuredSelector} from 'reselect';
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
const mapStateToProps=createStructuredSelector({
    itemCount:selectItemCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);