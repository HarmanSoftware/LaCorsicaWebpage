import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Slider1 from "../Assets/Images/1.png";

export default function ReactCarousel() {
  return (
    <>   
    <Carousel  infiniteLoop={true} autoPlay={true} showIndicators={true} showStatus={false} inetrval={2500} showThumbs={false}>
                <div>
                    <img src={Slider1} alt="slider img" />
                </div>
            </Carousel>
       
    </>
  )
}
