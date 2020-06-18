import {DropDownTypes} from './Cart-DropDownTypes'
export const toggleDDAction=()=>({
type:DropDownTypes.TOGGLE_DROPDOWN
})

export const addItem=(item)=>({
    type:DropDownTypes.ADD_ITEM,
    payload:item
})

export const removeItem=(item)=>({
    type:DropDownTypes.REMOVE_ITEM,
    payload:item
})

export const reduceItemQuantity=(item)=>({
    type:DropDownTypes.REDUCE_ITEM_QTY,
    payload:item
})