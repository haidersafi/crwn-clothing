import React from 'react';
import './menuitem.scss'

export const MenuItem=({title,imageUrl,size})=>{
    return(
        <div  className={`${size} menu-item`}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='content'>
     <h2 className='title'>{title.toUpperCase()}</h2>
     <span className='sub-title'>SHOP NOW</span></div></div>
    )
}