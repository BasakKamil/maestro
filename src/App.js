import React from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import Contact from './Components/NavInside/Contact';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact to="/" component={Dashboard}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/createproject" component={Createproject}/>
        </Switch>
        <ThreeBack/>
      </div>
      
    </BrowserRouter>
  )
}

export default App;
