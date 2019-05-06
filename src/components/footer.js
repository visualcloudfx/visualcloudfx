import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter className="pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3" />
          <MDBCol md="2" className="b-3" />
          <MDBCol md="2" className="b-3" />
          <MDBCol md="2" className="b-3" />
          <MDBCol md="2" className="b-3" />
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: '0 15%' }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: '1.7rem' }}>
              Please reach out to us with any inquiries you may have. We enjoy
              working with businesses in all stages of technical sophistication.
              If you need a web app for your business or a simple website we can
              help. We can build value and brand recognition via static React
              single page appilcations that can work with the CMS of your choice
              including WordPress hosted via affordable platforms where you only
              pay based upon the traffic that your application uses which can be
              next to nothing to start out. Speak with us about how you can
              leverage off the shelf business applications for analytics,
              intelligence, etc... on a pay as you go basis as well with support
              provided by our team of public cloud engineers. Or go big and have
              us help you develop a custom cloud native application from scratch
              to suit your unique business needs.
            </p>
          </MDBCol>
        </MDBRow>
        <hr
          className="clearfix d-md-none rgba-white-light"
          style={{ margin: '10% 15% 5%' }}
        />
        {/* <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <MDBIcon
                fab
                icon="facebook-f"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
              <MDBIcon
                fab
                icon="twitter"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
              <MDBIcon
                fab
                icon="google-plus-g"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
              <MDBIcon
                fab
                icon="linkedin-in"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
              <MDBIcon
                fab
                icon="instagram"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
              <MDBIcon
                fab
                icon="pinterest"
                size="lg"
                className="mx-2 white-text mr-md-4"
              />
            </div>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Visual Cloud FX
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
