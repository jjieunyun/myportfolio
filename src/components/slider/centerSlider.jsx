import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-theme.css';
import './slick.css';
import example from '../../imgs/reading_log.png'
import bookflix from '../../imgs/bookflix_screenshot.png'

export default class CenterSlider extends Component {

        render() {

            

        const settings = {
            arrows: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: true,
            autoplay : false,
            autoplaySpeed: 3000,
            dots : true,
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 400,
        };
        return (
            <div>
            <Slider {...settings}>
                <div className='slider_container'>
                    <img   src={example} alt="" />
                </div>
                <div className='slider_container'>

                    <img  src={bookflix} alt="" />
                </div>
                <div className='slider_container'>
                    <img  src={example} alt="" />
                </div>
                <div className='slider_container'>

                    <img src={example} alt="" />
                </div>
                <div className='slider_container'>
                    <img src={example} alt="" />
                </div>
                
            </Slider>
            </div>
        );
        }
    }
