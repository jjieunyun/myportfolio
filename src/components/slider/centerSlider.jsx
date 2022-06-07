import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import example from '../../imgs/reading_log.png'

export default class CenterSlider extends Component {
        render() {
        const settings = {
            arrows: true,
            touchMove: true,
            pauseOnHover: true,
            autoplay : true,
            autoplaySpeed: 3000,
            dots : true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 400,
        };
        return (
            <div>
            <Slider {...settings}>
                <div>
                <h3>Portfolio Site</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                <div>
                <h3>Youtube CloneCoding</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                <div>
                <h3>Bookflix</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                <div>
                <h3>Team Project</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                <div>
                <h3>Book Log</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                <div>
                <h3>6</h3>
                <img style={{width: '300px'}} src={example} alt="" />
                </div>
                
            </Slider>
            </div>
        );
        }
    }
