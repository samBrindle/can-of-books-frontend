import { Component } from "react";

class Profile extends Component {

  render() {




    // return <ListGroup.Item key={idx}>Title:{flick.title}, Overview:{flick.overview}</ListGroup.Item>
  return(
    <>
    <Container>
    <Carousel variant="dark" >
      <Carousel.Item key={idx}>
        <img
          style={{ 'height': "600px", 'width': "300px" }}
          className='d-block w-100'
          src={flick.img_url}
          alt={flick.title}
        />
        <Carousel.Caption id="carousel-caption">
          <h3>Sam Brindle</h3>
          <h4>Software Developer</h4>
          <p>~INSERT BIO HERE~</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={idx}>
        <img
          style={{ 'height': "600px", 'width': "300px" }}
          className='d-block w-100'
          src={flick.img_url}
          alt={flick.title}
        />
        <Carousel.Caption id="carousel-caption">
          <h3>Sam Brindle</h3>
          <h4>Software Developer</h4>
          <p>~INSERT BIO HERE~</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={idx}>
        <img
          style={{ 'height': "600px", 'width': "300px" }}
          className='d-block w-100'
          src={flick.img_url}
          alt={flick.title}
        />
        <Carousel.Caption id="carousel-caption">
          <h3>Sam Brindle</h3>
          <h4>Software Developer</h4>
          <p>~INSERT BIO HERE~</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
        </>
    )

  // render() {
  //   /* TODO: render information about the developers */
  //   return <p>Profile page coming soon</p>
  // }
};

export default Profile;
