import React from 'react'

import content from '../../content/content'

import './footer.scss'
import AndroidLogo from '../../assets/svgs/android-logo'
import AppleLogo from '../../assets/svgs/apple-logo'
import Envelope from '../../assets/svgs/envelope'
import FacebookLogo from '../../assets/svgs/facebook-logo'
import InstagramLogo from '../../assets/svgs/instagram-logo'
import TwitterLogo from '../../assets/svgs/twitter-logo'

const footer = (props) => {
  return (
    <footer className="ft-Footer">
      <div className="ft-Footer_Inner">
        <div className="ft-Footer_Body">
          <div className="ft-Footer_InputContainer">
            <input type="text" name="email" className="ft-Footer_Input" placeholder={content.footer.inputPlaceholder}/>

            <button className="ft-Footer_Button">
              <Envelope />
            </button>
          </div>

          <div className="ft-Footer_Links">
            <ul className="ft-Footer_Items">
              <li className="ft-Footer_Item">
                <a href="https://btystk.link/android" className="ft-Footer_Link">
                  <AndroidLogo />
                </a>
              </li>

              <li className="ft-Footer_Item">
                <a href="https://btystk.link/ios" className="ft-Footer_Link">
                  <AppleLogo />
                </a>
              </li>

              <li className="ft-Footer_Item">
                <a href="https://www.facebook.com/beautystack" className="ft-Footer_Link">
                  <FacebookLogo />
                </a>
              </li>

              <li className="ft-Footer_Item">
                <a href="https://www.instagram.com/beautystack/" className="ft-Footer_Link">
                  <InstagramLogo />
                </a>
              </li>

              <li className="ft-Footer_Item">
                <a href="https://twitter.com/beautystack" className="ft-Footer_Link">
                  <TwitterLogo />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
