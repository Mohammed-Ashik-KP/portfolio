import React from 'react';
import SkillSet from './skillset';

const About = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid height-50">
               
                <div className="row d-flex justify-content-start mt-4">
                    <div className="col offset-3">
                        <div className="content-title">
                            About Me
                        </div>
                    </div>
                </div>
                <div className="row mt-3 ">
                    <div className="col-xl-6 col-lg-7 col-md-7 col-sm-9 offset-xl-4 offset-lg-3 offset-md-2 offset-sm-2 text-left"> 
                        <div className="about">
                            <div className="blah">
                        ! am From Ottapalam , a town in palakkad ditsrict , Kerala . completed 3 year diploma in
                         computer engineering . Passionated Computer Programmer , Much Interested in Creating  Websites
                          And Web applications using latest web technologies, looking forward to be a
                           full stack Javascript developer !
                        </div></div>
                    </div>
                </div>
            </div>

                    <SkillSet/>
                    
        </React.Fragment>
     );
}
 
export default About;