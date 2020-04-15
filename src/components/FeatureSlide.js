import React, { Component } from 'react';
import iphone from '../images/iphone.png';
import ipad from '../images/ipad.png';
import appstore from '../images/app-store.svg';

class FeatureSlide extends Component {
    
    render() {
        return (
            <div id="features" className="feature-slide">
                <div className="container">
                    <div className="tile">
                        <h2 style={{marginBottom:"50px"}}>Simple, Streamlined Design</h2>
                        
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4" style={{textAlign: "left"}}>
                                <p className="covid-text">
                                    There's not much margin for error when you need to get to the ER for an emergency. Whether you're an EMT driving an ambulance or you just want to be prepared, ER Maps is an invaluable tool to have in your pocket. No matter where you are, we have you covered. With a huge database of U.S. hospitals, locations, and phone numbers, ER Maps ensures you can find the closest hospitals within seconds.
                                </p>
                                <ul style={{textAlign: "left", marginRight: "auto", marginLeft: "auto", display: "inline-block"}}>
                                    <li>
                                        <p>Live-updating hospital statuses, wait times, and more</p>
                                    </li>
                                    <li>
                                        <p>Filter by Trauma (Adult and Pediatric), Burn, Heart, Stroke Centers</p>
                                    </li>
                                    <li>
                                        <p>All hospitals in the USA</p>
                                    </li>
                                    <li>
                                        <p>Apple Maps integration</p>
                                    </li>
                                    <li>
                                        <p>Search for any hospital, whether you have cell service or not!</p>
                                    </li>
                                    <li>
                                        <p>Main phone number for each hospital</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src={iphone} className="img-fluid phone" alt="iphone"/>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        
                        <img src={ipad} className="img-fluid tablet" alt="ipad"/>
                        <br></br>
                        <a href="https://itunes.apple.com/us/app/er-maps/id1255277653?mt=8"><img src={appstore} className="app-store" alt="appstore"/></a>
                    </div>
                </div>
                
            </div>
    );
  }
}

export default FeatureSlide;