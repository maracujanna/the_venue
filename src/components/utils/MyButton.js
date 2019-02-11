import React from 'react'
import Button from '@material-ui/core/Button'

import ThicketIcon from '../../resources/images/icons/ticket.png'

function MyButton(props) {
  return (
    <Button
        href={props.link}
        variant="contained"
        size="small"
        style={{
            background: props.bck,
            color: props.color
        }}
    >
        <img 
            src={ThicketIcon}
            className="iconImage"
            alt="icon_button"
        />
        {props.text}
    </Button>
  )
}

export default MyButton
