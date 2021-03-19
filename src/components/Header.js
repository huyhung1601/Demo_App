import { AppBar, Grid,Button, Toolbar, Typography, makeStyles } from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    logo:{
        padding: theme.spacing(1),
    },
    button: {
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.inherit,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

const Header = (props) => {

    const classes = useStyles();
    const {setOpenLoginPopup, setOpenRegisterPopup, resetForm} = props

    
    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <Typography variant='h6' className={classes.logo}>
                            Demo App
                        </Typography>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <Button
                            variant = 'container' 
                            color='inherit' 
                            className={classes.button}
                            onClick={()=>(resetForm(), setOpenLoginPopup(true)) }
                        > Log in</Button>
                        <Button 
                            variant = 'container' 
                            color='inherit'
                            className={classes.button}
                            onClick={()=>(resetForm(),setOpenRegisterPopup(true)) }
                        > Sign up</Button>
                    </Grid>
                </Grid>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header
