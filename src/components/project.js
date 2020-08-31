import React from 'react';
const Project = (props) => {
    return ( 
        <React.Fragment>
                <div className="row text-center">
                <div className="box ">
                    <div className="box-image d-flex justify-content-center">
                        <img src={props.image} alt={props.title} height="100px"/>
                    </div>
                    <div className="mt-2 box-body">
                        <div className="heading">
                            {props.title}
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
                </div>
        </React.Fragment>
     );
}
 
export default Project;
