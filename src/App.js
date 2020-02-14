import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/Homepage';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

const HatsPage=()=>{
  return(<div>
    HatsPage</div>)
}

function App() {
  return (<div>
   
   <Router>
   
          
     <Route  exact path="/" component={HomePage}/>
     <Route exact path="/hats" component={HatsPage}/>
     
     
  </Router>

  
   
    </div>
  );
}

export default App;
