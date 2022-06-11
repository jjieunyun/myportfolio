import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import  './slider.css'
import example from '../../imgs/reading_log.png'
import bookflix from '../../imgs/bookflix_screenshot.png'



    export default function Slider() {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
        initial: 0,
        slides: {
            perView: 5,
            spacing: 10,
        },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    function ThumbnailPlugin(mainRef) {
        return (slider) => {
            function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
            }
            function addActive(idx) {
            slider.slides[idx].classList.add("active")
            }
    
            function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
            }
    
            slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
            })
        }
        }



    return (
        <section className='slider_container'>
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <img className='mainIMG' src={example} alt="" />
                <div className='slide_card'>
                    <div className='slide__bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h3>Portfolio Site</h3>
                    <p>Html CSS React 아이콘 찾아서 넣기</p>
                    <p>간단하게 사이트 설명 넣기</p>
                </div>
            </div>

            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide number-slide1">
                <img src={example} alt="" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img src={bookflix} alt="" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img src={example} alt="" />
            </div>
            <div className="keen-slider__slide number-slide4">
                <img src={bookflix} alt="" />
            </div>
            <div className="keen-slider__slide number-slide5">
                <img src={example} alt="" />
            </div>
        </div>
        </section>
    )
}



{/* <div className='card'>
                    <div className='bar'>
                        <div></div><div></div><div></div>
                    </div>
                    <h3>Portfolio Site</h3>
                    <p>Html CSS React 아이콘 찾아서 넣기</p>
                    <p>간단하게 사이트 설명 넣기</p>
                </div> */}