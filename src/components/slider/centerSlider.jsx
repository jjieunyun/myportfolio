// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './slick-theme.css';
// import './slick.css';
// import example from '../../imgs/reading_log.png'
// import bookflix from '../../imgs/bookflix_screenshot.png'

// export default class CenterMode extends Component {
//     render() {
//         const settings = {
//             className: "center",
//             centerMode: true,
//             infinite: true,
//             centerPadding: "70px",
//             slidesToShow: 3,
//             speed: 500,
//             arrows: true,
//             draggable: true,
//             touchMove: true,
//             pauseOnHover: true,
//             autoplay : true,
//             autoplaySpeed: 3000,
//             dots : true,
//         };
//         return (
//             <div>
//             <Slider {...settings}>

//             <div className='slider_container'>
//                 <img src={example} alt="" />
//             </div>

//             <div className='slider_container'>
//                 <img src={bookflix} alt="" />
//             </div>

//             <div className='slider_container'>
//                 <img src={example} alt="" />
//             </div>

//             <div className='slider_container'>
//                 <img src={bookflix} alt="" />
//             </div>

//             <div className='slider_container'>
//                 <img src={example} alt="" />
//             </div>
//             </Slider>
//             </div>
//         );
//         }
//     }