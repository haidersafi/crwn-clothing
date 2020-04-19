import React from 'react';
import './header.scss';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import {auth} from '../../Firebase/Firebase';
import CartIcon from '../Cart-Icon/Cart-Icon'
import CartDropdown from '../CartDropdown/CartDropdown'; 
const Header=({currentUser,toggle})=>{
    return(<div className='header'>
        <Link to='/' className='logo-container'><Logo/></Link>
        <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
        {currentUser?<Link to='/signin' onClick={()=>{auth.signOut()}} className='option'>SIGNOUT</Link>:<Link to='/signin' className='option'>SIGNIN</Link>}
        <CartIcon className='options'/>
        </div>{toggle?<CartDropdown/>:null}
        </div>)
}


const mapToStateToProps=(state)=>({
    currentUser:state.user.currentUser,
    toggle:state.toggleDropDown.toggle
})
export default connect(mapToStateToProps)(Header)

