import {createSelector} from 'reselect';


const selectShopData=state=>state.collection;
export const selectCollection=createSelector([selectShopData],shop=>shop.collectionShop)
export const selectShopCollectionPreview=createSelector([selectCollection],collection=>Object.values(collection))
export const selectCollectionCategory=(urlParam)=>{
    return(createSelector([selectCollection],
    collection=>collection[urlParam]))
    }