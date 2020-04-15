import React, { Component } from 'react';
import cataldo from '../images/cataldo-logo.png';

class PartnerSlide extends Component {
    
    render() {
        return (
            <div id="partner" className="partner-slide">
                <div className="container">
                    <div className="tile">
                        <h2>Who is enjoying ER Maps?</h2>
                        <img src={cataldo} className="img-fluid brand" alt="cataldo"/>
                        <p className="covid-text">
                            We teamed up with Cataldo Ambulance Service (Boston, MA) to help their EMT's with a custom version of ER Maps
                        </p>
                        <ul style={{textAlign: "left", marginRight: "auto", marginLeft: "auto", display: "inline-block"}}>
                            <li>
                                <p>We implemented the ability to connect their EMTs with their dispatchers via phone</p>
                            </li>
                            <li>
                                <p>Customize info pages with company protocols</p>
                            </li>
                            <li>
                                <p>Company logo displayed throughout app</p>
                            </li>
                            <li>
                                <p>Easy distribution through Apple's Volume Purchase Program</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
    );
  }
}

export default PartnerSlide;