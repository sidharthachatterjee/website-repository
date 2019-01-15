import React from 'react'

import './step.scss'
import Pen from '../../assets/svgs/pen'
import Phone from '../../assets/svgs/phone'
import Smile from '../../assets/svgs/smile'

const step = (props) => {
  let icon = ''

  if(props.svg === 'phone') {
    icon = <Phone />
  } else if(props.svg === 'pen') {
    icon = <Pen />
  } else {
    icon = <Smile />
  }

  return (
    <div className="stp-Step">
      <div className="stp-Step_Icon">
        {icon}
      </div>

      <div className="stp-Step_Content">
        <h4 className="stp-Step_Title">{props.title}</h4>
        <p className="stp-Step_Text">{props.text}</p>
      </div>
    </div>
  )
}

export default step
