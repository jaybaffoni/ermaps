import React, { Component } from 'react';

class AboutSlide extends Component {
    
    render() {
        return (
            <div id="about" className="about-slide">
                <div className="container">
                    <div className="tile">
                        <h2 style={{marginBottom:"50px"}}>How the App Works</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fas fa-first-aid big-icon"></i>
                                <h3>Select an emergency.</h3>
                                <br></br>
                                <p>We have curated a huge database of ER's across the U.S., categorized by the main time-sensitive emergencies. Select the emergency which corresponds to your needs.</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-hospital big-icon"></i>
                                <h3>Choose a hospital.</h3>
                                <br></br>
                                <p>ER Maps shows you the three nearest ER's for your emergency, along with estimated travel time and the CMED number so you can let the ER know you're coming.</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-directions big-icon"></i>
                                <h3>Get directions.</h3>
                                <br></br>
                                <p>Whether you prefer Apple Maps or Google Maps, just select your hospital and you immediately have directions to the ER of your choice.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
    );
  }
}

export default AboutSlide;