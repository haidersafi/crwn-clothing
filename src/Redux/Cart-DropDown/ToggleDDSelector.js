import {createSelector} from 'reselect';
export const selectToggle=state=>state.toggleDropDown;
export const toggleDD=createSelector([selectToggle],toggleD=>toggleD.toggle);