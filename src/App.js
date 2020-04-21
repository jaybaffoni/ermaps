import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Addition from './components/AdditionSlide';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Router, BrowserRouter, Route, Redirect } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, NavItem, MDBNavLink, NavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Container, Button, Link,
  MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter
  } from "mdbreact";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.setHospitalId = this.setHospitalId.bind(this);
    this.noId = this.noId.bind(this);
    this.state = ({
      isOpen: false,
      hospitalId: null,
      modal: false,
      error: ''
    });

  }

  setHospitalId(id) {
    this.setState({hospitalId: id});
    this.props.history.push('/details');
  }

  noId(){
    this.setState({modal:true, error:"Please sign in again"});
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <ScrollToTop>
          <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}    >
              <MDBModalHeader toggle={this.toggle}>Sign In Error</MDBModalHeader>
              <MDBModalBody>
                {this.state.error}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="primary" onClick={this.toggleModal}>Close</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
          <MDBNavbar color="black" dark fixed="top" expand="md">
            <Container>
            <MDBNavbarBrand>
              <strong className="white-text">ER Maps</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBNavItem>
                  <MDBNavLink to="/newsite">Notice a hospital or testing center missing?</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            </Container>
          </MDBNavbar>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/newsite" component={Addition}/>
          <Route path="*" render={() => <Redirect to="/" />}/>
          <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
      // <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by starline - www.freepik.com</a>
    );
  }

}

// const PrivateRoute = ({ component: Component, object: id, ...rest }) => (
  
//   <Route {...rest} render={(props) => (
//     id
//       ? <Component {...props} {...rest}/>
//       : <Redirect to={{
//           pathname: '/signin'
//         }} />
//   )} />
// )

const PropRoute = ({ component: Component, ...rest }) => (
  
  <Route {...rest} render={(props) => (
    <Component {...props} {...rest}/>
  )} />
)

export default App;
