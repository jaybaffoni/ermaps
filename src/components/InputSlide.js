import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";

class InputSlide extends Component {
    
    render() {
        return (
            <div id="input" className="input-slide">
                <div className="container">
                    <div className="row tile">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form>
                                <h2>Submit an Inquiry</h2>
                                <label htmlFor="defaultFormContactNameEx">
                                First Name
                                </label>
                                <input placeholder="Your first name" type="text" id="defaultFormContactNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactLastNameEx">
                                Last Name
                                </label>
                                <input placeholder="Your last name" type="text" id="defaultFormContactLastNameEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactOrgEx">
                                Organization
                                </label>
                                <input placeholder="Your organization name" type="text" id="defaultFormContactOrgEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactEmailEx">
                                Your Email
                                </label>
                                <input placeholder="you@example.com" type="email" id="defaultFormContactEmailEx" className="form-control" />
                                <br />
                                <label htmlFor="defaultFormContactMessageEx">
                                Your Message
                                </label>
                                <textarea placeholder="Tell us what you are looking for, what custom features you'd like, and any questions you may have." type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                                <div className="text-center mt-4">
                                <MDBBtn color="elegant" outline type="submit">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                        
                    </div>
                </div>
                
            </div>
    );
  }
}

export default InputSlide;