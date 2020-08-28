import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
        return (
            <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src={require("./assets/tourist3.jpg")}
            alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={require("./assets/Tourist1.jpg")}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={require("./assets/tourist2.jpg")}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

</div>
        )
    }
}