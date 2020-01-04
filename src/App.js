import React from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';
import Navbar from './Components/Layaut/Navbar';
import SignIn from './Components/Autoryzacja/SignIn';
import SignUp from './Components/Autoryzacja/SignUp';
import ProjectDetails from './Components/Project/ProjectDetails';
import Contact from './Components/NavInside/Contact';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/createproject" component={Createproject}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        
      </div>
      
    </BrowserRouter>
    <ThreeBack/>
   </React.Fragment>
  )
}

export default App;
