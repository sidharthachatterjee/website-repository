import React from 'react'

import OverlayFooter from '../overlayFooter/overlayFooter'
import SliderContent from '../sliderContent/slideContent'
import SliderImages from '../sliderImages/sliderImages'
import SwipeCarousel from '../swipeCarousel/swipeCarousel'

import './scrollOverlay.scss'
import Tear from '../../assets/svgs/tear'

const scrollOverlay = (props) => {
  const overlayContent = props.content.slider
  let containerClasses = {}

  if(props.containerFixed === null) {
    containerClasses = 'scrl-Overlay scrl-Overlay-complete'
  } else if(props.containerFixed) {
    containerClasses = 'scrl-Overlay scrl-Overlay-fixed'
  } else {
    containerClasses = 'scrl-Overlay'
  }

  return (
    <div className={containerClasses}>
      <span className="scrl-Overlay_Tear">
        <Tear />
      </span>
      <div className="scrl-Overlay_Inner" ref={(ref) => props.innerRefCallback(ref)}>
        <div className="scrl-Overlay_Body">
          <div className="scrl-Overlay_Content">
            <div className="scrl-Overlay_Columns">
              <div className="scrl-Overlay_Column scrl-Overlay_Column-content"
                   ref={(ref) => props.refCallback(ref, 0)}>
                <h4 className="scrl-Overlay_Title"><span className="scrl-Overlay_Title scrl-Overlay_Title-condensed">{overlayContent.titleCondensed}</span> {overlayContent.title}</h4>

                <div className="scrl-Overlay_Buttons">
                  <button
                    onClick={() => props.toggleSliders('client')}
                    className={props.sliderType === 'client' && props.activeSlideIndex > 0
                      ? "scrl-Overlay_Button scrl-Overlay_Button-active"
                      : "scrl-Overlay_Button"}
                  >{overlayContent.buttonText1}</button>
                  <button
                    onClick={() => props.toggleSliders('pro')}
                    className={props.sliderType === 'pro' && props.activeSlideIndex > 0
                      ? "scrl-Overlay_Button scrl-Overlay_Button-active"
                      : "scrl-Overlay_Button"}
                  >{overlayContent.buttonText2}</button>
                </div>
              </div>

              {props.mediaQuery.matches
                ? <div className="scrl-Overlay_Column scrl-Overlay_Column-phone" ref={(ref) => props.refCallback(ref, 1)}>
                  <SliderImages
                    activeSlideIndex={props.activeSlideIndex}
                    content={props.content}
                    slides={props.slides}
                  />
                </div>
                : <div className="scrl-Overlay_SwipeCarousel">
                  <SwipeCarousel
                    setCurrentIndex={props.setCurrentIndex}
                    swipeCarouselRefCallback={props.swipeCarouselRefCallback}
                    swipeSlidesRefCallback={props.swipeSlidesRefCallback}
                    activeSlideIndex={props.activeSlideIndex}
                    content={props.content}
                    slides={props.slides}
                    swipeSliderHeight={props.swipeSliderHeight}
                  />
                </div>
              }
            </div>

            {props.mediaQuery.matches
              ? <div className="scrl-Overlay_SliderContent" ref={(ref) => props.refCallback(ref, 2)}>
                <SliderContent
                  slidesRefCallback={props.slidesRefCallback}
                  activeSlideIndex={props.activeSlideIndex}
                  content={props.content}
                  slides={props.slides}
                />
              </div>
              : null
            }
          </div>
        </div>

        <footer className="scrl-Overlay_Footer">
          <OverlayFooter content={props.content} />
        </footer>
      </div>
    </div>
  )
}

export default scrollOverlay
