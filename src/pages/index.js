import React from 'react'

import Layout from '../components/layout/layout'
import ScrollOverlay from '../components/scrollOverlay/scrollOverlay'
import SEO from '../components/seo'
import SocialButton from '../components/socialButton/socialButton'

import content from '../content/content'

import '../styles/app.scss'
import './landing.scss'
import Logo from '../assets/svgs/logo'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    // this.touchstartX = 0;
    // this.touchstartY = 0;
    // this.touchendX = 0;
    // this.touchendY = 0;

    this.swipeCarouselRef = undefined
    this.swipeSlidesRef = []
    this.innerRef = undefined
    this.refColumns = []
    this.refSlides = []

    this.state = {
      activeSlideIndex: undefined,
      clientSlides: content.slider.client,
      containerFixed: false,
      defaultSlide: content.slider.default,
      mediaQuery: window.matchMedia('(min-width: 768px)'),
      proSlides: content.slider.pro,
      sliderType: 'client',
      swipeSliderHeight: 320
    }
  }

  componentDidMount () {
    this.state.mediaQuery.addEventListener('resize', this.handleEventListeners)

    this.handleEventListeners()
    this._refCallback()
    this._slidesRefCallback()
    this._innerRefCallback()
    this._swipeSlidesRefCallback()
    this._swipeCarouselRefCallback()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.calculateThresholds)
    window.removeEventListener('scroll', this.calculateCurrentScrollIndex)
    window.removeEventListener('resize', this.calculateThresholds)
  }

  calculateCarouselContentHeight = () => {
    let slides = []

    for(let i = 0; i < this.swipeSlidesRef.length; i++) {
      slides.push(this.swipeSlidesRef[i].children[0].offsetHeight)
    }

    const tallestSlide = Math.max.apply(null, slides)
    this.setState({ swipeSliderHeight: tallestSlide })
  }

  calculateCurrentScrollIndex = () => {
    const numSlides = this.refSlides.length

    if(window.scrollY > window.innerHeight * (numSlides + 1)) {
      this.setState({
        activeSlideIndex: numSlides,
        containerFixed: null
      })
    } else if(window.scrollY > window.innerHeight) {
      this.setState({
        containerFixed: true,
      })

      for(let i = 0; i < numSlides; i++) {
        if(window.scrollY > window.innerHeight * (i + 1) && window.scrollY < (window.innerHeight * (i + 2))) {
          this.setState({ activeSlideIndex: i })
        }
      }
    } else {
      this.setState({
        activeSlideIndex: null,
        containerFixed: false
      })
    }
  }

  calculateThresholds = () => {
    // Deals with adding the fixed class to the parents when scrolling + calculating the position left and the width of all the items so they can be fixed properly
    let innerPadding = parseInt(window.getComputedStyle(this.innerRef).getPropertyValue('padding-left').replace('px', ''))
    const numSlides = this.refSlides.length

    this.refColumns[0].style.width = this.refColumns[0].getBoundingClientRect().width + 'px'
    this.refColumns[1].style.width = this.refColumns[1].getBoundingClientRect().width + 'px'
    this.refColumns[0].style.left = this.innerRef.getBoundingClientRect().left + innerPadding + 'px'

    for(let i = 0; i < numSlides; i++) {
      this.refSlides[i].children[0].style.width = this.refSlides[0].getBoundingClientRect().width + 'px'
    }
  }

  handleEventListeners = () => {
    if(this.state.mediaQuery.matches) {
      window.addEventListener('scroll', this.calculateThresholds)
      window.addEventListener('scroll', this.calculateCurrentScrollIndex)
      window.addEventListener('resize', this.calculateThresholds)
      this.calculateCurrentScrollIndex()
      this.calculateThresholds()
    } else {
      window.addEventListener('resize', this.calculateCarouselContentHeight)
      // if(typeof this.swipeCarouselRef !== 'undefined') {
      //   this.swipeCarouselRef.addEventListener('touchstart', (event) => {
      //     this.touchstartX = event.screenX
      //     this.touchstartY = event.screenY
      //     this.handleSwipeGesture()
      //   }, false)
      //
      //   this.swipeCarouselRef.addEventListener('touchend', (event) => {
      //     this.touchendX = event.screenX
      //     this.touchendY = event.screenY
      //     this.handleSwipeGesture()
      //   }, false)
      // }
      this.calculateCarouselContentHeight()
    }
  }

  // handleSwipeGesture = () => {
  //   if (this.touchendX < this.touchstartX) {
  //     alert('left!');
  //   }
  //   if (this.touchendX > this.touchstartX) {
  //     alert('right!');
  //   }
  // }

  toggleSliders = (type) => {
    if(window.matchMedia('(min-width: 768px)').matches) {
      window.scrollTo(0, (window.innerHeight * 2) + 120)
    } else {
      this.calculateCarouselContentHeight()
    }

    this.setState({
      sliderType: type
    }, () => {
      this.setState({ activeSlideIndex: 1 })
    })
  }

  setCurrentIndex = (index) => {
    this.setState({ activeSlideIndex: index })
  }

  _innerRefCallback = (ref) => {
    if(typeof ref !== 'undefined' && ref !== null) {
      this.innerRef = ref
    }
  }

  _refCallback = (ref, index) => {
    if(typeof ref !== 'undefined' && ref !== null) {
      this.refColumns[index] = ref
    }
  }

  _slidesRefCallback = (ref, index) => {
    this.refSlides[index] = ref
  }

  _swipeCarouselRefCallback = (ref) => {
    if(typeof ref !== 'undefined' && ref !== null) {
      this.swipeCarouselRef = ref
    }
  }

  _swipeSlidesRefCallback = (ref, index) => {
    if(typeof ref !== 'undefined' && ref !== null) {
      this.swipeSlidesRef[index] = ref
    }
  }

  render () {
    return (
      <Layout>
        <SEO title="beautystack" />

        <div className="lnd-Landing">
          <div className="lnd-Landing_ImageContainer">
            <img alt="woman with winged eye makeup" src={require('../assets/images/home-bg.jpg')} className="lnd-Landing_Image"/>
          </div>

          <div className="lnd-Landing_Body">
            <div className="lnd-Landing_Inner">

              <div className="lnd-Landing_Logo">
                <Logo />
              </div>

              <div className="lnd-Landing_Buttons">
                <div className="lnd-Landing_Button">
                  <SocialButton type="android"/>
                </div>

                <div className="lnd-Landing_Button">
                  <SocialButton type="apple"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollOverlay
          toggleSliders={this.toggleSliders}
          setCurrentIndex={this.setCurrentIndex}
          innerRefCallback={this._innerRefCallback}
          refCallback={this._refCallback}
          slidesRefCallback={this._slidesRefCallback}
          swipeCarouselRefCallback={this._swipeCarouselRefCallback}
          swipeSlidesRefCallback={this._swipeSlidesRefCallback}
          activeSlideIndex={this.state.activeSlideIndex}
          containerFixed={this.state.containerFixed}
          content={content}
          defaultSlide={this.state.defaultSlide}
          mediaQuery={this.state.mediaQuery}
          sliderType={this.state.sliderType}
          slides={
            this.state.sliderType === 'client'
              ? this.state.clientSlides
              : this.state.proSlides
          }
          swipeSliderHeight={this.state.swipeSliderHeight}
        />
      </Layout>
    )
  }
}

export default Landing
