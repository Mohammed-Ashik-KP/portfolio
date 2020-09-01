import React from 'react';
const Contact = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid">
            <div className="row d-flex offset-3 justify-content-start align-items-center mt-4">
                       <div className="content-title">Contact</div>
            </div>
                <div className="contact-box offset-md-3 mt-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col contact-details">
                        <form>
                            <div class="form-group margin30">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email Id"/>
                            </div>
                            <div class="form-group  margin30">
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name"/>
                            </div>
                            <div class="form-group  margin30">
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Location"/>
                            </div>
                        </form>
                        </div>
                        <div className="col contact-data">
                        <div class="form-group margin30">
                                <textarea class="form-control" id="exampleInputEmail1" placeholder="Message" rows="6"/>
                            </div>
                        </div>
                    </div>
                    <div className="row contact-button ">
                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="btn btn-primary send-button">Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Contact;