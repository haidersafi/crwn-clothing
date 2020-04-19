import React from 'react';
import './collection-item.scss';
import CustomButton from '../Custom-Button/CustomButton'

const CollectionItem=({name,imageUrl,price})=>{
    return(<div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='collection-footer'><span className='name'>{name}</span><span>{price}$</span></div>
      <CustomButton inverted>SHOP</CustomButton>  </div>)
}
export default CollectionItem;