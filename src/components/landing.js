import React from 'react';
import '../index.css';
import ashiq from '../assets/ashiq-high.png';

const Landing = () => {
    return ( 
        <React.Fragment>
            <div className="row d-flex justify-content-center align-items-end mt-5">
                    <div className="col offset-md-4 height-50">
                        <div className="title">
                            I'M MOHAMMED <br/> <span>ASHIK</span>
                                <div className="moto">
                                  &bull;  I Write Code &bull; 
                                </div>
                        </div>
                    </div>
               <img src={ashiq} alt="pic" className="model"></img>
            </div>

            <div className="row offset-3 d-flex justify-content-start mt-3">
                <div className="col-6 d-flex justify-content-between">
                <div className="button light_btn text-center ml-5">Know More</div>
                <div className="button light_btn text-center mr-2">Contact</div>
                </div>
            </div>
         
            
            
        </React.Fragment>
     );
}
 
export default Landing;