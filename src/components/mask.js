import React from 'react'
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  Animation,
} from 'mdbreact'

const Intro = ({ children }) => {
  return (
    <MDBContainer style={{ marginTop: '25vh', marginBottom: '50vh' }}>
      <MDBRow>
        <MDBCol md="12" className="white-text text-center">
          <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">
            Visual Cloud FX
          </h2>
          <hr className="hr-light my-4 w-75" />
          <h4 className="subtext-header h4-responsive mt-2 mb-4">
            Web development and cloud computing for the non technical small to
            medium business
          </h4>
          <Animation type="rubberBand" duration="2s">
            <MDBBtn size="lg" color="indigo">
              <MDBIcon icon="home" className="mr-2" />{' '}
              <a className="white-text" href="mailto:jacob@visualcloudfx.com">
                Email us!
              </a>
            </MDBBtn>
          </Animation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Intro
