import React, { Component } from 'react'
import {
  MDBContainer,
  MDBNavbar,
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
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
