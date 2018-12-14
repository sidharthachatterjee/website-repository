import React from 'react'

import './socialButton.scss'
import AndroidLogo from '../../assets/svgs/android-logo'
import AppleLogo from '../../assets/svgs/apple-logo'

const socialButton = (props) => {
  let link = ''

  if(props.type === 'apple') {
    link = <a href="https://btystk.link/ios" rel="noopener noreferrer" target="_blank" className="scl-Button">
      <AppleLogo />
    </a>
  } else {
    link = <a href="https://btystk.link/android" rel="noopener noreferrer" target="_blank" className="scl-Button">
      <AndroidLogo />
    </a>
  }

  return (
    link
  )
}

export default socialButton
