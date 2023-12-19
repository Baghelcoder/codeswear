import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../slider1.webp'
import slider2 from '../slider2.webp'
import slider3 from '../slider3.webp'


function Slider(){
    return(
        <>
        <Carousel autoPlay="true" interval={1000} infiniteLoop="true">
            <div className="slider">
                <img src={`${slider1}`} alt="slider"/>
            </div>
            <div className="slider">
                <img src={`${slider2}`} alt="slider"/>
            </div>
            <div className="slider">
                <img src={`${slider3}`} alt="slider"/>
            </div>
        </Carousel>
        </>
    )
}

export {Slider}