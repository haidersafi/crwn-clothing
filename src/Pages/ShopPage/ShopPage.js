import React from 'react';
import {Route} from 'react-router-dom';
import Collection from '../CollectionPage/Collection';
import CollectionOverview from '../../Components/CollectionsOverview/CollectionOverview'
const ShopPage=({match})=>{
    console.log(match);
    return(
        <div>
<Route exact path={`${match.path}`} component={CollectionOverview}/>
<Route  path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    )
}


export default  ShopPage;

