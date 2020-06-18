import {SHOP_DATA}  from './ShopData'
const initialState={
    collectionShop:SHOP_DATA
}

const shopDataReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default shopDataReducer;