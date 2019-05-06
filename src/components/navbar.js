import React, { Component } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  Animation,
} from 'mdbreact'
import { Link } from 'gatsby'
import { ReactComponent as Logo } from '../images/logo.svg'

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <Animation type="bounce" duration="2s">
            <Link to="/" className="navbar-brand">
              <Logo />
            </Link>
          </Animation>
          <MDBNavbarToggler
            name="navbar-toggler"
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem className="pt-2 text">
                <a
                  className="white-text"
                  href="https://portfolio.visualcloudfx.com"
                >
                  Design Portfolio
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <a
                  className="white-text"
                  href="https://facebook.com/visualcloudfx/"
                >
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </a>
                {/*  <CustomNavLink to="#!">
                  <MDBIcon fab icon="twitter" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="linkedin" className="ml-1" />
                </CustomNavLink> */}
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
