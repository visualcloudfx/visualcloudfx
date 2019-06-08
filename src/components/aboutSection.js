import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'

const FeaturesPage = () => {
  return (
    <MDBContainer tag="section" className="text-center my-3 pt-2">
      <h2 className="h1-responsive font-weight-bold my-3">Our Services</h2>
      <p className="lead grey-text w-responsive mx-auto mb-5">
        We provide custom IT solutions for non technical small and medium
        businesses based in the public cloud at affordable prices through
        process optimization
      </p>
      <MDBRow>
        <MDBCol md="4">
          <MDBIcon icon="chart-area" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">Cloud Infrastructure</h5>
          <p className="grey-text mb-md-0 mb-5">
            Our primary focus has always been to assist and grow value for small
            to medium sized companies through leveraging cutting edge
            information and business systems. To bring the public cloud to you
            we leverage expertise in AWS, Azure, and Google Cloud Platform.
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon icon="book" size="3x" className="cyan-text" />
          <h5 className="font-weight-bold my-4">Web and App Development</h5>
          <p className="grey-text mb-md-0 mb-5">
            <ul className="text-left">
              <li>Robust, scalable, and self-healing</li>
              <li>Node.js, React.js, and more</li>
              <li>Infrastructure as Code</li>
              <li>DevOps / Agile Methodology</li>
              <li>AWS, Azure ,and Google Cloud Platform</li>
              <li>Container and Serverless Architecture</li>
            </ul>
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon far icon="comments" size="3x" className="orange-text" />
          <h5 className="font-weight-bold my-4">Support</h5>
          <p className="grey-text mb-md-0 mb-5">
            We support our products as well as consulting for third party
            technologies and provide modernization strategies for SMBs. All
            businesses can be maintain their competitiveness and grow their
            value with proper guideance through the digital transformation.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default FeaturesPage
