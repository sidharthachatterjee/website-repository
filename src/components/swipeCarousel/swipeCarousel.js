import React from 'react'

import SliderImages from '../sliderImages/sliderImages'

import './swipeCarousel.scss'

const swipeCarousel = (props) => {
  return (
    <div className={props.activeSlideIndex === undefined ? "swp-Carousel swp-Carousel-showfirst" : "swp-Carousel"} ref={(ref) => props.swipeCarouselRefCallback(ref)}>
      <SliderImages
        activeSlideIndex={props.activeSlideIndex}
        slides={props.slides}/>

      <div className="swp-Carousel_Dots">
        <ul className="swp-Carousel_DotsItems">
          {props.slides.map((slide, index) => (
            <li className={props.activeSlideIndex === index
              ? "swp-Carousel_DotsItem swp-Carousel_DotsItem-active"
              : "swp-Carousel_DotsItem"} key={index + Math.random()}>
              <button onClick={() => props.setCurrentIndex(index)} className="swp-Carousel_Dot" />
            </li>
          ))}
        </ul>
      </div>

      <div className="swp-Carousel_Content" style={{height: props.swipeSliderHeight}}>
        <ul className="swp-Carousel_Items">
          {props.slides.map((slide, index) => (
            <li className={props.activeSlideIndex === index
              ? "swp-Carousel_Item swp-Carousel_Item-active"
              : "swp-Carousel_Item"} key={slide.id} ref={(ref) => props.swipeSlidesRefCallback(ref, index)}>
              <div className="swp-Carousel_Content">
                {
                  slide.title
                    ? <h4 className="swp-Carousel_Title">{slide.title}</h4>
                    : null
                }
                <p className="swp-Carousel_Text">{slide.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default swipeCarousel
