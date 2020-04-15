import React, { Component } from 'react';
import { MDBNavLink, Button } from 'mdbreact';

class CovidSlide extends Component {
    
    render() {
        return (
            <div id="covid" className="covid-slide">
                <div className="container">
                    <div className="tile">
                        <h2 style={{marginBottom:"50px"}}>Doing our part for Covid-19</h2>
                        <p className="covid-text">
                            In light of the current pandemic, we have decided to do our part by making ER Maps free to all - no ads, no fees, completely free. We have also tailored it to promote a more organized pandemic response.
                        </p>
                        <p className="covid-text">
                            By giving the public up-to-date statistics on ER wait times, hospital bed availability, and ventilator availability, we hope to evenly spread patient load across hospitals to relieve those hospitals hardest hit.
                        </p>
                        <p className="covid-text">
                            ER Maps is testing a crowd source feature to provide the most accurate and up-to-date hospital data, including locations of pop-up clinics around the country. We need YOU to help in this effort by updating wait times and status updates from your hospital visits.
                        </p>
                        <p className="covid-text">
                            Please feel free to submit a query below with any questions, concerns, or partnership opportunities.
                        </p>
                        <br></br>
                        <MDBNavLink to="/contact"><Button color="elegant" outline>Contact</Button></MDBNavLink>
                    </div>
                </div>
                
            </div>
    );
  }
}

export default CovidSlide;