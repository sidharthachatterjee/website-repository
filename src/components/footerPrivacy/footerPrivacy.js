import React from 'react'
import { Link } from '@reach/router'

import content from '../../content/content'

import './footerPrivacy.scss'

const footerPrivacy = () => {
  return (
    <div className="ft-Privacy">
      <div className="ft-Privacy_Inner">
        <div className="ft-Privacy_Body">
          <div className="ft-Privacy_Column">
            <ul className="ft-Privacy_Items">
              <li className="ft-Privacy_Item">
                <Link to="/privacy" className="ft-Privacy_Link">Privacy</Link>
              </li>
              <li className="ft-Privacy_Item">
                <Link to="/terms" className="ft-Privacy_Link">Terms</Link>
              </li>
              <li className="ft-Privacy_Item">
                <a href="https://angel.co/beautystack" className="ft-Privacy_Link">Careers</a>
              </li>
              <li className="ft-Privacy_Item">
                <a href="https://medium.com/beautystack" className="ft-Privacy_Link">Company blog</a>
              </li>
            </ul>
          </div>

          <div className="ft-Privacy_Column">
            <p className="ft-Privacy_Email">{content.defaults.email}</p>
          </div>

          <div className="ft-Privacy_Column">
            © {new Date().getFullYear() + ' ' + content.defaults.companyName} London
          </div>
        </div>
      </div>
    </div>
  )
}

export default footerPrivacy
