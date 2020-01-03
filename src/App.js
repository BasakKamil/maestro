import React from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import Contact from './Components/NavInside/Contact';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';
import Navbar from './Components/Layaut/Navbar';
import SignIn from './Components/Autoryzacja/SignIn';
import SignUp from './Components/Autoryzacja/SignUp';
import ProjectDetails from './Components/Project/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/createproject" component={Createproject}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
        <ThreeBack/>
      </div>
      
    </BrowserRouter>
  )
}

export default App;
