import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from 'mdbreact'
import image4 from '../images/abstract-art1.webp'
import image2 from '../images/abstract-art2.webp'
import image3 from '../images/abstract-art3.webp'

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showIndicators={false}
      className="z-depth-1 w-100"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
              alt="First slide"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
              alt="Second slide"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
              alt="Mattonit's item"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default CarouselPage
