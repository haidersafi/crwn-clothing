import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/Homepage';
import { Route} from 'react-router-dom';
import ShopPage from './Pages/ShopPage/ShopPage';

function App() {
  return (<div>
     <Route  exact path="/" component={HomePage}/>
     <Route exact path="/Shop" component={ShopPage}/>
    </div>
  );
}

export default App;
