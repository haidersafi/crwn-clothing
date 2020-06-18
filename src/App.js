import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/Homepage';
import { Route,Redirect} from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SigninSignupPage from './Pages/SigninSignupPage/SigninSignupPage';
import { auth,createUserProfileDocument } from './Firebase/Firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/UserAction';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/User/UserSelector';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';

class App extends React.Component {
  unSubscribeauth=null;
  componentDidMount()
  {
    
    this.unSubscribeauth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth)
      {
     const userRef= await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot=>{
      this.props.setCurrentUser({
      id:snapShot.id,...snapShot.data()})})
    }
    this.props.setCurrentUser(userAuth)

}
) }
    
  componentWillUnmount(){
    this.unSubscribeauth();
  }


  render(){
  return (
    <div>
    <Header/>
     <Route  exact path="/" component={HomePage}/>
     <Route  path="/Shop" component={ShopPage}/>
     <Route exact path="/Signin" render={()=>this.props.currentUser?<Redirect to='/'/>:<SigninSignupPage/>}/>
    <Route exact path="/checkout" component={CheckOutPage}/>
     </div>
  );}
}
const mapStateToProps=createStructuredSelector({currentUser:selectCurrentUser})
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);

