import React from 'react'
import {IconButton as MuiIconButton, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({

}))

const IconButton = (props) => {

    const {children, color, onClick} = props;

    return (
        <MuiIconButton        
            color={color || "inherit"}
            onClick={onClick}
        >
            {children}
        </MuiIconButton>
    )
}

export default IconButton
