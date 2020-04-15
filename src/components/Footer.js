import React, { Component } from 'react';
import rrr from '../images/rrr.png';
import logo from '../logo.png';
import appstore from '../images/app-store.svg';
import { MDBNavLink, Button } from 'mdbreact';

class CovidSlide extends Component {
    
    render() {
        return (
            <div id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} className="img-fluid rrr" alt="ER Maps"/>
                            <br></br>
                            <a href="https://itunes.apple.com/us/app/er-maps/id1255277653?mt=8"><img src={appstore} className="app-store" alt="appstore"/></a>
                        </div>
                        <div className="col-md-4">
                            <img src={rrr} className="img-fluid rrr" alt="Ryan Rizzo"/>
                            <p>Website created by Ryan Rizzo</p>
                            <p>&copy; 2020</p>
                        </div>
                        <div className="col-md-4">
                            <p style={{marginBottom: "0px"}}>Hospital Administrators</p>
                            <MDBNavLink to="/signin"><Button color="primary" size="sm">Sign In</Button></MDBNavLink>
                            <p style={{marginBottom: "0px"}}>New Facilities</p>
                            <MDBNavLink to="/register"><Button color="danger" size="sm">Register</Button></MDBNavLink>
                        </div>
                    </div>
                    
                </div>
                
            </div>
    );
  }
}

export default CovidSlide;