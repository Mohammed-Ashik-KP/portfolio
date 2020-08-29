import React from 'react';
import './index.css';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import Footer from './components/footer';
import { Route, BrowserRouter ,Switch } from 'react-router-dom';
import About from './components/about';
const Main = () => {
    return ( 
        <React.Fragment>
              
              
                <BrowserRouter>
                    <Nav/>
                      <Switch>
                          <Route path="/" exact component={Landing}></Route>
                          <Route path="/about" exact component={About}></Route>
                      </Switch>
                </BrowserRouter>
              
               <Footer/>
    
          
         
        </React.Fragment>
     );
}
 
export default Main;