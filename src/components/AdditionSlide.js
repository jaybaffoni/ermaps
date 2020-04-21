import React, { Component } from 'react';
import { MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBInput } from "mdbreact";
import axios from 'axios';
import queryString from 'qs'
const adultMap = {
     adult0: 0,
     adult1: 1,
     adult2: 2,
     adult3: 3   
};
const pediaMap = {
    pedia0: 0,
    pedia1: 1,
    pedia2: 2,
    pedia3: 3
}

class AdditionSlide extends Component {

    constructor() {
        super();
        this.state = ({
            isHospital: false,
            stroke: false,
            pci: false,
            burn: false,
            pediaLevel: "pedia0",
            adultLevel: "adult0",
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            lat: '',
            long: ''
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.pediaChange = this.pediaChange.bind(this);
        this.adultChange = this.adultChange.bind(this);
        this.submitHospital = this.submitHospital.bind(this);
        this.submitTestCenter = this.submitTestCenter.bind(this);
        this.reset = this.reset.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const name = event.target.name;

        this.setState({
            [name]: !this.state[name]
        });
    }

    adultChange(event){
        const name = event.target.name;
        this.setState({adultLevel: name});
    }

    pediaChange(event){
        const name = event.target.name;
        this.setState({pediaLevel: name});
    }


    toggleHospital = () => {
        this.setState({ isHospital: !this.state.isHospital });
    }

    submitHospital(){
        console.log('hospital');
        this.reset();
    }

    submitTestCenter(){
        console.log('test center');
        this.reset();
    }

    handleSubmit(event){
        var url = 'https://ermaps.herokuapp.com/api/v1.0/testingcenter'
        if(this.state.isHospital) url = 'https://ermaps.herokuapp.com/api/v1.0/hospital'

        var data = {
            name: this.state.name,
            address: this.state.address,
            zip: this.state.zip,
            state: this.state.state,
            phone: this.state.phone,
            lat: this.state.lat,
            long: this.state.long,
            stroke: this.state.stroke,
            pci: this.state.pci,
            burn: this.state.burn,
            pediatrictrauma: pediaMap[this.state.pediaLevel],
            adulttrauma: adultMap[this.state.adultLevel]
        }

        console.log("SUBMITTING>>>>>>>");
        event.preventDefault();
        console.log(data);
        axios.post(url, queryString.stringify(data))
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        }); 
        this.reset();
      };

    reset() {
        this.setState({
            stroke: false,
            pci: false,
            burn: false,
            pediaLevel: "pedia0",
            adultLevel: "adult0"
        });
    }

    changeHandler(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div id="addition" className="addition-slide">
                <div className="container">
                    <div className="tile">
                        <h2 style={{marginBottom:"20px"}}>Are we missing a 
                            {this.state.isHospital ? 
                            <span style={{color: "#880e4f"}}> Hospital</span> : 
                            <span style={{color: "#3f51b5"}}> Testing Center</span>}?</h2>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="instruction">
                                    Enter the info below and we will review it and update our dataset accordingly. Or, submit a
                                    {!this.state.isHospital ? 
                                    <span className="clickable" onClick={this.toggleHospital} style={{color: "#880e4f"}}> Hospital </span> : 
                                    <span className="clickable" onClick={this.toggleHospital} style={{color: "#3f51b5"}}> Testing Center </span>}
                                    instead.
                                </p>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <form onSubmit={this.handleSubmit}>
                                <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            Facility Name
                                        </label>
                                        <input
                                            value={this.state.name}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="name"
                                            placeholder="Facility Name"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid name.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    <br />
                                    <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            Address
                                        </label>
                                        <input
                                            value={this.state.address}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="address"
                                            placeholder="Facility Address"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid address.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    <br />
                                    <MDBRow>
                                        <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            City
                                        </label>
                                        <input
                                            value={this.state.city}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="city"
                                            placeholder="City"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                        </MDBCol>
                                        <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            State
                                        </label>
                                        <input
                                            value={this.state.state}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="state"
                                            placeholder="State"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                        </MDBCol>
                                        <MDBCol md="4" className="mb-3">
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            Zip
                                        </label>
                                        <input
                                            value={this.state.zip}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="zip"
                                            placeholder="Zip"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                        </MDBCol>
                                    </MDBRow>
                                    <br />
                                    <label
                                            htmlFor="defaultFormRegisterPasswordEx4"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            value={this.state.phone}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="phone"
                                            placeholder="508-555-1234"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid phone number.
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    <br />
                                    <MDBRow>
                                        <MDBCol md="6" className="mb-3">
                                        <label htmlFor="defaultFormRegisterPasswordEx4">Latitude</label>
                                        <input
                                            value={this.state.lat}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="lat"
                                            placeholder="Latitude"
                                        />
                                        </MDBCol>
                                        <MDBCol md="6" className="mb-3">
                                        <label htmlFor="defaultFormRegisterPasswordEx4">Longitude</label>
                                        <input
                                            value={this.state.long}
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterPasswordEx4"
                                            className="form-control"
                                            name="long"
                                            placeholder="Longitude"
                                        />
                                        </MDBCol>
                                    </MDBRow>
                                    <br/>
                                    <div className="text-center mt-4">
                                    {this.state.isHospital ? 
                                    <div style={{textAlign: "left"}}>
                                        <fieldset>
                                            <legend>Hospital Attributes (Select all that apply)</legend>
                                            <div className="custom-control custom-checkbox" style={{textAlign: "left", width: "100%"}}>
                                                <input type="checkbox" className="custom-control-input" name="stroke" id="stroke" checked={this.state.stroke} onChange={this.handleInputChange}/>
                                                <label className="custom-control-label" htmlFor="stroke">This facility is a stroke center</label>
                                            </div>
                                            <div className="custom-control custom-checkbox" style={{textAlign: "left", width: "100%"}}>
                                                <input type="checkbox" className="custom-control-input" name="pci" id="pci" checked={this.state.pci} onChange={this.handleInputChange}/>
                                                <label className="custom-control-label" htmlFor="pci">This facility is a PCI center</label>
                                            </div>
                                            <div className="custom-control custom-checkbox" style={{textAlign: "left", width: "100%"}}>
                                                <input type="checkbox" className="custom-control-input" name="burn" id="burn" checked={this.state.burn} onChange={this.handleInputChange}/>
                                                <label className="custom-control-label" htmlFor="burn">This facility is a burn center</label>
                                            </div>
                                        </fieldset>
                                        
                                        <br></br>
                                        <fieldset>
                                            <legend>Pediatric Trauma Level</legend>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="pedia0" name="pedia0" checked={this.state.pediaLevel === "pedia0"} onChange={this.pediaChange}/>
                                                <label className="custom-control-label" htmlFor="pedia0">Not a pediatric trauma facility</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="pedia1" name="pedia1" checked={this.state.pediaLevel === "pedia1"} onChange={this.pediaChange}/>
                                                <label className="custom-control-label" htmlFor="pedia1">Level 1</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="pedia2" name="pedia2" checked={this.state.pediaLevel === "pedia2"} onChange={this.pediaChange}/>
                                                <label className="custom-control-label" htmlFor="pedia2">Level 2</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="pedia3" name="pedia3" checked={this.state.pediaLevel === "pedia3"} onChange={this.pediaChange}/>
                                                <label className="custom-control-label" htmlFor="pedia3">Level 3</label>
                                            </div>
                                        </fieldset>
                                        
                                        <br></br>
                                        <fieldset>
                                            <legend>Adult Trauma Level</legend>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="adult0" name="adult0" checked={this.state.adultLevel === "adult0"} onChange={this.adultChange}/>
                                                <label className="custom-control-label" htmlFor="adult0">Not an adult trauma facility</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="adult1" name="adult1" checked={this.state.adultLevel === "adult1"} onChange={this.adultChange}/>
                                                <label className="custom-control-label" htmlFor="adult1">Level 1</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="adult2" name="adult2" checked={this.state.adultLevel === "adult2"} onChange={this.adultChange}/>
                                                <label className="custom-control-label" htmlFor="adult2">Level 2</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="adult3" name="adult3" checked={this.state.adultLevel === "adult3"} onChange={this.adultChange}/>
                                                <label className="custom-control-label" htmlFor="adult3">Level 3</label>
                                            </div>
                                        </fieldset>
                                        <br></br>
                                        <MDBBtn color="unique" type="submit" style={{float: "left"}}>
                                            Submit
                                        </MDBBtn>
                                    </div>
                                    
                                    :
                                    <MDBBtn color="indigo" type="submit" style={{float: "left"}}>
                                        Submit
                                    </MDBBtn>}
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                        </div>

                    </div>
                </div>
                
            </div>
    );
  }
}

export default AdditionSlide;