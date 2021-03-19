import { Button, Grid } from '@material-ui/core'
import React from 'react'
import Controls from '../../components/controls/Controls'
import {Form} from '../../components/useForm'



const LoginForm = (props) => {
    
    const {values,onChange,errors, setErrors, setOpenLoginPopup,resetForm,setOpenRegisterPopup} = props


    //Validation
    const validate = () =>{
        let temp= {}        
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        temp.password = values.password? '' : 'This Field is required '
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==='')
    }    

    const handleLogin = (e) => {
        e.preventDefault()
        if (validate()){
        window.alert(console.log(values.email, values.password ,'submitted'))
        setOpenLoginPopup(false)
        resetForm()
        }
    }
    
    return (
        
        
        <Form  onSubmit={handleLogin}>
            <Grid container >
                    <Controls.Input
                        name='email'
                        label= 'Email'
                        value={values.email}
                        onChange={onChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        name= 'password'
                        label= 'Password'
                        value={values.password}
                        onChange={onChange}
                        error={errors.password}
                    />
                    <Controls.Button 
                        type='submit'
                        text='Login'
                    />
                    <Controls.Button
                        text='Register'
                        color='secondary' 
                        onClick={()=>(setOpenRegisterPopup(true), setOpenLoginPopup(false))}
                    />
            </Grid>
        </Form>
    )
}

export default LoginForm
