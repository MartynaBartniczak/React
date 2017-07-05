import React from 'react'

import './Button.css'

const Button = (props) => (
  <button
    className={'Button ' + (props.extraClassName || '')}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default Button