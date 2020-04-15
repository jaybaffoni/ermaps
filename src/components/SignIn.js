import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Input,
         MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import logo from '../logo.png';


class SignIn extends Component {
    
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.switch = this.switch.bind(this);

        this.state = {
            id: '',
            passcode: '',
            modal:false,
            error:''
          };        
    }

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    switch(){
      this.props.history.push('/search');
    }
    
    login(e) {
        // e.preventDefault();
        // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

        // }).catch((error) => {
        //     this.setState({modal:true, error:error});
        // });
        console.log("LOGGING IN");
    }
    
    render() {
        return (
            <div>
                <MDBContainer>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
                    <MDBModalHeader toggle={this.toggle}>Sign In Error</MDBModalHeader>
                    <MDBModalBody>
                      {this.state.error.message}
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="primary" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>
                <div className="login-slide middle">
                  <div className="login-card">
                      
                      <h3>Sign in to your facility </h3>
                      <form>
                        <div className="grey-text">
                          {/* <Input label="Enter Hospital Id" group type="name" name="id" onChange={this.handleChange} value={this.state.id}/> */}
                          <Input label="Enter Hospital Id" group  name="id" onChange={this.handleChange} value={this.state.id}/>
                          <Input label="Enter passcode" group type="password" name="passcode" onChange={this.handleChange} value={this.state.passcode}/>
                        </div>
                      <Button block color="primary" onClick={this.login}>Sign In</Button>
                      </form>
                      <p style={{marginTop: 15}} >Don't know your Hospital Id?</p>
                      <Button size="sm" block color="elegant" onClick={this.switch}>Search</Button> 
                  </div>
                </div>
                
            </div>
    );
  }
}

export default withRouter(SignIn);