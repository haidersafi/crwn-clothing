import React,{Component} from 'react';
import {SHOP_DATA} from './ShopData';
import {CollectionPreview} from '../../Components/Collection-Preview/CollectionPreview'


class ShopPage extends Component{
constructor(props)
{
    super(props);
    this.state={
collections:SHOP_DATA
    }
}
render()
{
    const {collections}=this.state;
    return(
        <div>{
collections.map(({id,...otherCollectionProps})=>{
    return(<CollectionPreview key={id} {...otherCollectionProps}/>)
})
        }</div>
    )
}
}
export default ShopPage;

