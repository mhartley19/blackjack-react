import React from 'react'
import {Button, Alert}  from 'react-bootstrap'

const CustomButton = (props) => {
    
    return(
        <Button id={props.id} disabled={props.disabled} onClick={props.onClick}>{props.text}</Button>
    )
}

export default CustomButton