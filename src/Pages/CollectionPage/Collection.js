import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionCategory} from '../../Redux/ShopData/ShopDataSelector';
import CollectionItem from '../../Components/CollectionItem/CollectionItem'
import './collection.scss';
const Collection=({collection})=>{
    console.log(collection)
    const {title,items}=collection;
    console.log('item',items);

    return(<div className="collectionpage">
    <h2 className="title">{title}</h2>
    <div className="items">
    {items.map(item=><CollectionItem item={item}/>) }</div>
        </div>)
}
const mapStateToProps=(state,ownProps)=>({
    collection:selectCollectionCategory(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);