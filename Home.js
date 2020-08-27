import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
           
<div className="layoutTestYellow pageBody">
<div className="layoutTestBlue left pageBody">
{/* <marquee behavior="scroll" direction="left" scrolldelay="800" scrollamount="100">
<img src={require('../assets/tourist2.jpg')} width="150" alt="Cup of tea anyone?"/>
<img src={require('../assets/tourist3.jpg')} width="150"  alt="Cup of tea anyone?"/>
<img src={require('../assets/tourist2.jpg')} width="150"  alt="Cup of tea anyone?"/>
<img src={require('../assets/tourist3.jpg')} width="150" alt="Cup of tea anyone?"/>
</marquee> */}




<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block" src={require('../assets/tourist2.jpg')} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block" src={require('../assets/tourist3.jpg')} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block"src={require('../assets/tourists4.jpg')} alt="Third slide"/>
    </div>
  </div>
</div> 
</div>


<div className="layoutTestRed right pageBody">
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/Union2.jpg')} alt="arcade"/>
    <p className="bottom-left">VIEW</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/arcade.jpg')} alt="arcade"/>
    <p className="bottom-left">PLAY</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
    <img src={require('../assets/CAC3.jpg')} alt="CAC"/>
    <p className="bottom-left">ART</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/skatepark3.jpg')} alt="arcade"/>
    <p className="bottom-left">SKATE</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/otherMuseum.jpg')} alt="arcade"/>
    <p className="bottom-left">LEARN</p> 
</div>
</div>
<div className="imgWithText">
<div className="layoutElements">
<img src={require('../assets/newport1.jpg')} alt="arcade"/>
    <p className="bottom-left">SHOP</p> 
</div>
</div>
</div>
</div>
        )
    }
}

