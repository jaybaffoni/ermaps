import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Search from './components/Search';
import Details from './components/Details';
import Register from './components/Register';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, NavItem, MDBNavLink, NavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Container, Button, Link
  } from "mdbreact";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = ({
      isOpen: false
    });

  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
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
                  <Link style={{padding: "0px"}} to="/signin"><Button color="primary" size="sm">Sign In</Button></Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            </Container>
          </MDBNavbar>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          {/* <Route exact path="/details" component={Details}/> */}
          <Route exact path="/search" component={Search}/>
          <Route exact path="/register" component={SignIn}/>
          <Route path="*" render={() => <Redirect to="/" />}/>
          <Footer />
          </ScrollToTop>
        </BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
      // <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by starline - www.freepik.com</a>
    );
  }

}

export default App;
