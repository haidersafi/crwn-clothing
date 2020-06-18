import React from 'react';
import {CollectionPreview} from '../Collection-Preview/CollectionPreview';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionPreview} from '../../Redux/ShopData/ShopDataSelector';
const CollectionOverview=({collections})=>{
    return(
        <div>{
collections.map(({id,...otherCollectionProps})=>{
    return(<CollectionPreview key={id} {...otherCollectionProps}/>)
})
        }</div>
    )
}
const mapStateToProps=createStructuredSelector({collections:selectShopCollectionPreview})
export default  connect(mapStateToProps)(CollectionOverview);
