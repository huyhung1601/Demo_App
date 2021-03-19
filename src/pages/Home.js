import { Typography,ThemeProvider, Paper, Grid, makeStyles, Button } from '@material-ui/core'
import hero from '../images/hero.png'
import React, {useState} from 'react'
import Header from '../components/Header'
import Controls from '../components/controls/Controls'
import LoginForm from './userform/LoginForm'
import {useForm} from '../components/useForm'
import RegisterForm from './userform/RegisterForm'
import Popup from '../components/Popup'


const useStyles = makeStyles((theme)=>({
    container:{
        top: theme.spacing(5),
        padding: theme.spacing(5),        
    },
    image:{
        display: "flex"  ,
        [theme.breakpoints.down('md')]:{
            display:'none'
        }  
    }

}))




const Home = () => {

    const classes = useStyles();
    // Extract useForm
    const {values, setValues, handleInputChange, errors, setErrors,resetForm } = useForm()
    //Handle popup
    const [openLoginPopup, setOpenLoginPopup] = useState(false)
    const [openRegisterPopup, setOpenRegisterPopup] = useState(false) 
    
    
{ /*   const validate = () =>{
        let temp= {}
        temp.fullName = values.fullName ? '' : 'This field is required'
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        temp.password = values.password? '' : 'This Field is required '
        temp.password2 = (values.password2 === values.password)? '' : 'Passwords does not match  '
        temp.phone = values.phone.length>9? '' : 'Minimum 10 numbers is required '
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x=='')
    }*/}

    // Email Validation
    const validate = () =>{
        let temp={}
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x=='')
    }

    const handleSubmit = e=>{
        e.preventDefault()
        if(validate()){
            setOpenRegisterPopup(true)            
        }            
               
    }
       

    return (
        <ThemeProvider>
            <div>
                <Header setOpenLoginPopup={setOpenLoginPopup} setOpenRegisterPopup={setOpenRegisterPopup} resetForm={resetForm}/>
            </div>            
            <Paper >
                <Grid container width='80%'  >
                    <Grid item sm></Grid>
                    <Grid item xs={3} positon='fixed'>
                    <Typography variant='h3'>Trello helps teams move work forward.</Typography>
                    <Typography >
                        Collaborate, manage projects, and reach new productivity peaks.
                        From high rises to the home office, the way your team works is unique—accomplish it all with Trello.
                    </Typography>
                    <form onSubmit= {handleSubmit}>
                        <Controls.Input 
                            name = 'email'
                            label = 'Email' 
                            value = {values.email}
                            onChange = {handleInputChange}
                            error = {errors.email}
                        />
                        <Controls.Button 
                            text='Sign up free!'
                            type ='submit'
                        />                        
                        
                        <Controls.Button
                            text='Reset'
                            onClick={resetForm}
                        />
                    </form>
                    
                    </Grid>                    
                    <Grid item  >
                        <img src={hero} width='300' className={classes.image} />
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
                
                <Popup 
                    openPopup={openLoginPopup}
                    setOpenPopup={setOpenLoginPopup}
                    title='Log in to continue'  
                    resetForm={resetForm}                                     
                >
                    <LoginForm
                        values={values}
                        onChange={handleInputChange}
                        errors={errors}
                        setErrors={setErrors}
                        setOpenLoginPopup={setOpenLoginPopup}
                        resetForm={resetForm}
                        setOpenRegisterPopup={setOpenRegisterPopup}
                    />
                </Popup>
                <Popup
                    openPopup={openRegisterPopup}
                    setOpenPopup={setOpenRegisterPopup}
                    title='Sign up for your account'
                    resetForm={resetForm}                   
                >
                    <RegisterForm
                        values={values}
                        onChange={handleInputChange}
                        errors={errors}                        
                        setErrors={setErrors}
                        resetForm={resetForm}
                        setOpenRegisterPopup={setOpenRegisterPopup}
                    />
                </Popup>
            </Paper>
            
            
        </ThemeProvider>

        
    )
}

export default Home
