import React from 'react';
import './index.css';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import Footer from './components/footer';
import { Route, BrowserRouter ,Switch } from 'react-router-dom';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import MenuProvider from './components/context';
const Main = () => {
    return ( 
        <React.Fragment>
              
              
                <BrowserRouter>
                <MenuProvider>
                    <Nav/>
                </MenuProvider>
                      <Switch>
                          <Route path="/" exact component={Landing}></Route>
                          <Route path="/about" exact component={About}></Route>
                          <Route path="/portfolio" exact component={Portfolio}></Route>
                          <Route path="/contact" exact component={Contact}></Route>
                      </Switch>
                </BrowserRouter>
              
               <Footer/>
    
          
         
        </React.Fragment>
     );
}
 
export default Main;