import React from 'react';
import './App.css';
import ThreeBack from './Components/Animate/ThreeBack';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Shop from './Components/NavInside/Shop';
import Createproject from './Components/Project/Createproject';
import Navbar from './Components/Layaut/Navbar';
import SignIn from './Components/Autoryzacja/SignIn';
import ProjectDetails from './Components/Project/ProjectDetails';
import Contact from './Components/NavInside/Contact';
import About from './Components/NavInside/About';
import UserForm from './Components/Auth/UserForm/UserForm';
import Cv from './Components/Layaut/Cv';
import Ordersum from './store/shop/Ordersum';
// import {useTransitions, animated} from 'react-spring';

const routes = [
  {path: '/shop', name: "Shop", Component: Shop },
  {path: '/contact', name: "Contact", Component: Contact },
  {path: '/about', name: "About", Component: About },
  {path: '/cv', name: "CV" , Component: Cv}
]

const App = () => {

  // const { location } = useContext(__RouterContext);
  // const transitions = useTransitions(location,loaction=>location.pathname,{
  //     from: {opacity:0,transform: "translate(100%,0)"},
  //     enter: {opacity:1,transform: "translate(0%,0)"},
  //     leave:{opacity:0,transform: "translate(-50%,0)"}
  // });

  return (
    <React.Fragment>
    <Router>
      <div className="App">
        <Navbar/>
        {/* {transitions.map(({item,props,key})=>(
            <animated.div key={key} style={props}> */}
               {/* <Switch location={item}> */}
               <Switch>
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/project/:id" component={ProjectDetails}/>
                  <Route path="/createproject" component={Createproject}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/signup" component={UserForm}/>
                  <Route path="/ordersum" component={Ordersum}/>
                  {routes.map(({path,Component})=>{
                  return <Route key="name" path={path} exact>
                             <div className="page">
                              <Component/>
                            </div>
                        </Route>
                   })}   
                </Switch>
            {/* </animated.div>
        ))}   */}
      </div>  
    </Router>
    <ThreeBack/>
   </React.Fragment>
  )
}

export default App;
