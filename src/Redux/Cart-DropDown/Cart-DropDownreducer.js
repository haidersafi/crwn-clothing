import {DropDownTypes} from './Cart-DropDownTypes';
import addItemToCart from '../../Components/CartUtility/cartUtility';
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
            default:
                return state;
        
    }
}

export default ddReducer;