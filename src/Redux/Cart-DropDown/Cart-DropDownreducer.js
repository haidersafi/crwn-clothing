import {DropDownTypes} from './Cart-DropDownTypes'
const initialState={
    toggle:false
}

const ddReducer=(state=initialState,action)=>{
    switch( action.type)
    {
        case DropDownTypes.TOGGLE_DROPDOWN:{
            return ({...state,toggle:!state.toggle})
        }
            default:
                return state;
        
    }
}

export default ddReducer;