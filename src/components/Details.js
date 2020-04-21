import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Input,
         MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';

class Details extends Component {
    
    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div>
                DETAILS
            </div>
    );
  }
}

export default withRouter(Details);