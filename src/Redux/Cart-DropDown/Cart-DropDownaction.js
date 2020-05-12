import {DropDownTypes} from './Cart-DropDownTypes'
export const toggleDDAction=()=>({
type:DropDownTypes.TOGGLE_DROPDOWN
})

export const addItem=(item)=>({
    type:DropDownTypes.ADD_ITEM,
    payload:item
})