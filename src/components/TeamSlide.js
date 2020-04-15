import React, { Component } from 'react';
import bortman from '../images/bortman.jpeg';
import rizzo from '../images/rizzo.png';

class TeamSlide extends Component {
    
    render() {
        return (
            <div id="team" className="team-slide">
                <div className="container">
                    <div className="tile">
                        <h2 style={{marginBottom:"50px"}}>The Team</h2>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <img src={bortman} className="img-fluid profile" alt="bortman"/>
                                <h3>Jeff Bortman</h3>
                                <br></br>
                                <p>Jeff is currently a second year medical student at New York Medical College where he is pursuing his M.D. Jeff graduated from Tufts University ('17) where he received his B.S. in Biology.</p>
                            </div>
                            <div className="col-md-5">
                                <img src={rizzo} className="img-fluid profile" alt="rizzo"/>
                                <h3>Ryan Rizzo</h3>
                                <br></br>
                                <p>Ryan is currently the iOS Development Lead at Interpro Solutions. Ryan graduated from Middlebury College ('17) where he received his B.A. in Computer Science and Economics.</p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
    );
  }
}

export default TeamSlide;