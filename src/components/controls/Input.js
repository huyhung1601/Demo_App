import { TextField } from '@material-ui/core'
import React from 'react'

const Input = (props) => {
    const {name, label, value,error=null, onchange, ...other} = props
    return (
        <TextField
            autoComplete='off'
            variant='outlined'
            label={label}
            name={name}
            value={value}
            {...other}            
            {...error && {error: true, helperText: error}}
        />
        
    )
}

export default Input
