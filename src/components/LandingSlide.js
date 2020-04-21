import React, { Component } from 'react';
import iphone from '../images/iphone.png';
import appstore from '../images/app-store.svg';
import logo from '../logo.png'

class LandingSlide extends Component {
    
    render() {
        return (
            <div id="home" className="landing-slide">
                <div className="container">
                    <div className="tile">
                    <div className="row">
                        <div style={{textAlign: "center"}} className="col-md-8 middle-high">
                            <img src={logo} className="logo" style={{maxWidth: "150px"}} alt="logo"/>
                            <h1>Find the closest ER. Fast.</h1>
                            <a href="https://itunes.apple.com/us/app/er-maps/id1255277653?mt=8"><img src={appstore} className="app-store" alt="appstore"/></a>
                        </div>
                        <div className="col-md-3">
                        <   img src={iphone} className="img-fluid" alt="iphone" />
                        </div>
                        <div className="col-md-1">

                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
    );
  }
}

export default LandingSlide;