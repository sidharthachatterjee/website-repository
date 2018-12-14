import { Link } from 'gatsby'
import React from 'react'

import content from '../../content/content'

import './header.scss'
import Logo from '../../assets/svgs/logo-b'

const headerContent = content.header

const header = () => (
  <header className="hd-Header">
    <div className="hd-Header_Inner">
      <div className="hd-Header_Body">
        <Link to="/" className="hd-Header_LogoContainer">
          <Logo />
        </Link>

        <a href="https://popup.beautystack.com/" target="_blank" rel="noopener noreferrer" className="hd-Header_Link">
          {headerContent.buttonText}
        </a>
      </div>
    </div>
  </header>
)

export default header
