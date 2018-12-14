import React from 'react'

import './sliderContent.scss'

const sliderContent = (props) => {
  return (
    <div className="sld-Content_Slider">
      <ul className="sld-Content_Items">
        {props.slides.map((slide, index) => (
          <li className={props.activeSlideIndex === index
            ? "sld-Content_Item sld-Content_Item-active"
            : "sld-Content_Item"} key={slide.id} ref={(ref) => props.slidesRefCallback(ref, index)}>
            <div className="sld-Content_Content">
              {
                slide.title
                  ? <h4 className="sld-Content_Title">{slide.title}</h4>
                  : null
              }
              <p className="sld-Content_Text">{slide.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default sliderContent
