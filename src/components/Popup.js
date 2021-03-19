import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Controls from './controls/Controls';
import { useForm } from './useForm';

const useStyles = makeStyles((theme)=>({
    dialogWrapper:{
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        
    }
}))

const Popup = (props) => {

    const classes = useStyles();    

    const {title, children, openPopup, setOpenPopup,resetForm} = props
    
    
    return (

        <Dialog open={openPopup} maxWidth='sm'classes={{paper:classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display: 'flex'}}>
                <Typography variant='h5' component='div' style={{flexGrow: 1}}>
                    {title}
                </Typography>
                <Controls.Button
                    text='X'
                    color = 'secondary'
                    size='small'
                    onClick={()=>(resetForm(),setOpenPopup(false)) }
                />
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
