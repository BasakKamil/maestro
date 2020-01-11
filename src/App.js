import React from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';
import Navbar from './Components/Layaut/Navbar';
import SignIn from './Components/Autoryzacja/SignIn';
import ProjectDetails from './Components/Project/ProjectDetails';
import Contact from './Components/NavInside/Contact';
import About from './Components/NavInside/About';
import UserForm from './Components/Auth/UserForm/UserForm';


const routes = [
  {path: '/shop', name: "Shop", Component: Shop },
  {path: '/contact', name: "Contact", Component: Contact },
  {path: '/about', name: "About", Component: About }
]

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/createproject" component={Createproject}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={UserForm}/>
      
        
           {routes.map(({path,Component})=>{
            return <Route key="name" path={path} exact>
                      <div className="page">
                         <Component/>
                      </div>
                   </Route>
            })}
          
          
        </Switch>
        
      </div>
      
    </BrowserRouter>
    <ThreeBack/>
   </React.Fragment>
  )
}

export default App;
