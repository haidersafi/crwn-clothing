import {DropDownTypes} from './Cart-DropDownTypes';
import {addItemToCart,reduceItemQty} from '../../Components/CartUtility/cartUtility';
const initialState={
    toggle:false,
    item:[]
}

const ddReducer=(state=initialState,action)=>{
    switch( action.type)
    {
        case DropDownTypes.TOGGLE_DROPDOWN:{
            return ({...state,toggle:!state.toggle})
        }
        case DropDownTypes.ADD_ITEM:{
          return({...state,item:addItemToCart(state.item,action.payload)})
        }
        case DropDownTypes.REMOVE_ITEM:{
            return({...state,item:state.item.filter(cartItem=>cartItem.id!==action.payload.id)})
        }
        case DropDownTypes.REDUCE_ITEM_QTY:{
            return({...state,item:reduceItemQty(state.item,action.payload)})
        }
            default:
                return state;
        
    }
}

export default ddReducer;