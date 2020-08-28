import React from 'react';
import './index.css';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
const Main = () => {
    return ( 
        <React.Fragment>
          <div className="container-fluid"> 
                  <Nav/>
                  <Landing/>
          </div>
          
         
        </React.Fragment>
     );
}
 
export default Main;