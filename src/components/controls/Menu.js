import React, {useState} from 'react'
import {Divider, Menu as MuiMenu, Typography} from '@material-ui/core'


const Menu = (props) =>{ 
   
    const{children, open, onClose, anchorEl,id, text} = props;
    
    return (
        <>        
        <MuiMenu
            anchorEl={anchorEl}
            anchorOrigin = {{vertical: 'top', horizontal: 'right'}}
            id={id}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'left'}}
            open={open}
            onClose={onClose} 
        >
            <div>
                <Typography variant='h6' >{text}</Typography>                        
                <Divider/>
                {children}
            </div>
        </MuiMenu>
        </>
    )
}

export default Menu
