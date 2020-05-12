import React from 'react';
import './collection-item.scss';
import CustomButton from '../Custom-Button/CustomButton'
import {connect} from 'react-redux';
import {addItem} from '../../Redux/Cart-DropDown/Cart-DropDownaction'

const CollectionItem=({item,addItem})=>{
  const {name,imageUrl,price}=item;
    return(<div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='collection-footer'><span className='name'>{name}</span><span>{price}$</span></div>
      <CustomButton onClick={()=>addItem(item)} inverted>SHOP</CustomButton>  </div>)
}

const mapDispatchToProps=(dispatch)=>({
  addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);