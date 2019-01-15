import React from 'react'

import SocialButton from '../socialButton/socialButton'
import Step from '../../components/step/step'

import './overlayFooter.scss'

const overlayFooter = (props) => {
  const footerContent = props.content.footerTop
  const steps = props.content.steps

  return (
    <div className="ovr-Footer">
      <div className="ovr-Footer_Inner">
        <div className="ovr-Footer_Body">
          <h4 className="ovr-Footer_Title">{footerContent.title} <span className="ovr-Footer_Title-condensed">{footerContent.titleCondensed}</span></h4>

          <p className="ovr-Footer_Text ovr-Footer_Text-top">{footerContent.textTop}</p>
          <p className="ovr-Footer_Text">{footerContent.textBottom}</p>

          <div className="ovr-Footer_Steps">
            <ul className="ovr-Footer_Items">
              {steps.map((step, index) => (
                <li className="ovr-Footer_Item" key={step.id}>
                  <Step
                    svg={step.svg}
                    text={step.text}
                    title={step.title}
                  />
                </li>
              ))}
            </ul>
          </div>

          <p className="ovr-Footer_Download">{footerContent.downloadText}</p>

          <div className="ovr-Footer_Buttons">
            <div className="ovr-Footer_Button">
              <SocialButton type="android"/>
            </div>
            <div className="ovr-Footer_Button">
              <SocialButton type="apple"/>
            </div>
          </div>

          <h4 className="ovr-Footer_Title">{footerContent.sloganWord1} <span className="ovr-Footer_Title-condensed">
               {footerContent.sloganText}
            </span> {footerContent.sloganWord2} <span className="ovr-Footer_Title-condensed">
               {footerContent.sloganText}
            </span> {footerContent.sloganWord3} <span className="ovr-Footer_Title-condensed">
              {footerContent.sloganText}
            </span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default overlayFooter
