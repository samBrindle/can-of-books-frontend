import React from 'react';
import { Carousel, Container } from "react-bootstrap";

class About extends React.Component {

  render() {




    // return <ListGroup.Item key={idx}>Title:{flick.title}, Overview:{flick.overview}</ListGroup.Item>
    return (
      <>
        <Container>
          <Carousel variant="dark" >
            <Carousel.Item>
              <img
                style={{ 'height': "600px", 'width': "300px" }}
                className='d-block w-100'
                src="https://via.placeholder.com/150"
                alt="Sam"
              />
              <Carousel.Caption id="carousel-caption">
                <h3>Sam Brindle</h3>
                <h4>Software Developer</h4>
                <p>~INSERT BIO HERE~</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
              <img
                style={{ 'height': "600px", 'width': "300px" }}
                className='d-block w-100'
                src="https://via.placeholder.com/150"
                alt="Ben"
              />
              <Carousel.Caption id="carousel-caption">
                <h3>Ben Choe</h3>
                <h4>Software Developer</h4>
                <p>~INSERT BIO HERE~</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
              <img
                style={{ 'height': "600px", 'width': "300px" }}
                className='d-block w-100'
                src="https://via.placeholder.com/150"
                alt="Vinny"
              />
              <Carousel.Caption id="carousel-caption">
                <h3>Vinny Shipley</h3>
                <h4>Software Developer</h4>
                <p>~INSERT BIO HERE~</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    )

  };
}

export default About;
