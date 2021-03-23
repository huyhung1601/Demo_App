import { FormControlLabel } from '@material-ui/core'
import { CheckBox as MuiCheckBox, } from '@material-ui/icons'
import React from 'react'

const Checkbox = (props) => {

    const {name, label, onChange, value, labelPlacement} = props
    return (
        <FormControlLabel
            control={<MuiCheckBox
                name={name}
                color='primary'
                checked={value}
                onChange={onChange}
            />}
            label={label}
            labelPlacement={labelPlacement || 'start'}
        />
        
    )
}

export default Checkbox
