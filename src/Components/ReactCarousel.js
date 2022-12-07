import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Slider1 from "../Assets/Images/1.png";
import Slider2 from "../Assets/Images/2.png";
import Slider3 from "../Assets/Images/3.png";
import Slider4 from "../Assets/Images/4.png";
import Slider5 from "../Assets/Images/5.png";
import Slider6 from "../Assets/Images/6.png";
import Slider7 from "../Assets/Images/7.png";


export default function ReactCarousel() {
  return (
    <>   
    <Carousel  infiniteLoop={true} autoPlay={true} showIndicators={true} showStatus={false} inetrval={2500} showThumbs={false}>
                <div>
                    <img src={Slider1} alt="slider img" />
                </div>
                <div>
                    <img src={Slider2} alt="slider img" />
                </div>
                <div>
                    <img src={Slider3} alt="slider img" />
                </div>
                <div>
                    <img src={Slider4} alt="slider img" />
                </div>
                <div>
                    <img src={Slider5} alt="slider img" />
                </div>
                <div>
                    <img src={Slider6} alt="slider img" />
                </div>
                <div>
                    <img src={Slider7} alt="slider img" />
                </div>
    </Carousel>
       
    </>
  )
}
