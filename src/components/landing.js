import React from 'react';
import '../index.css';
import ashiq from '../assets/ashiq-high.png';
import ashiqround from '../assets/ashiq-round.png';
const Landing = () => {
    return ( 
        <React.Fragment>
            <div className="vh-75">
            <div className="row d-flex title-row justify-content-center align-items-end mt-5 x ">
                    <div className="col offset-xl-4 offset-md-2 offset-sm-2 height-50">
                        <div className="title">
                            I'M MOHAMMED <br/> <span>ASHIK</span>
                                <div className="moto">
                                  &bull;  I Write Code &bull; 
                                </div>
                        </div>
                    </div>
               <img src={ashiq} alt="pic" className="model"></img>
               <img src={ashiq} alt="pic" className="sm-model"></img>
            </div>

            <div className="row button-row offset-xl-3 offset-md-2 offset-sm-1 d-flex justify-content-start">
                <div className="col-5 button-col justify-content-around">
                <div className="_button light_btn text-center">Know More</div>
                <div className="_button light_btn text-center">Contact</div>
                </div>
            </div>
            </div>
            
            
        </React.Fragment>
     );
}
 
export default Landing;