import React from 'react';
import './directory.scss';
import {selectSections} from '../../Redux/Directory/DirectorySelector';
import {connect} from 'react-redux';
import  MenuItem  from '../MenuItem/MenuItem';
import {createStructuredSelector} from 'reselect';

const Directory=({sections})=> {
   return(<div className='directory-menu'>
        {sections.map(({id,...otherSectionsProps})=>{
            return(<MenuItem key={id} {...otherSectionsProps}/>)})}</div>)
    
}
const mapStateToProps=createStructuredSelector({
  sections:selectSections
})
export default connect(mapStateToProps)(Directory);
