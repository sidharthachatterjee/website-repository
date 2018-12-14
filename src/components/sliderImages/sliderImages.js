import React from 'react'

import './sliderImages.scss'

const sliderImages = (props) => {
  return (
    <div className="sld-Images">
      <div className="sld-Images_ImageContainer">
        <img alt="phone mockup background" src={require('../../assets/images/phone-body.png')} className="sld-Images_Image"/>
      </div>

      <div className="sld-Images_Images">
        <ul className="sld-Images_Items">
          {props.slides.map((slide, index) => (
            <li className={props.activeSlideIndex === index
              ? "sld-Images_Item sld-Images_Item-active"
              : "sld-Images_Item"} key={slide.id}>
              <img alt="slide" src={require('../../assets/images/slides/' + slide.img)} className="sld-Images_Image"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default sliderImages
