import { Grid } from '@material-ui/core'
import React from 'react'
import Controls from '../../components/controls/Controls'
import {Form} from '../../components/useForm'

const Account = (props) => {
    
    const {values, onChange,errors, setErrors, navigation} = props

    //Validation
    const validate = () =>{
        let temp= {}        
        temp.email = (!values.email)? 'This Field is required ' : 
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) ? 'Email is not valid':''
        temp.password = values.password? '' : 'This Field is required '
        temp.password2 = (values.password2 === values.password)? '' : 'Passwords does not match  '
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==='')
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(validate()){
            navigation.next()
        }
    }

    return (
        

        <Form onSubmit={handleSubmit}>
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
            <Controls.Input
                name= 'password2'
                label= 'Confirm Password'
                value={values.password2}
                onChange={onChange}
                error={errors.password2}
            />              
            <Controls.Button
                variant='contained' 
                color='primary'
                text='Continue'
                type='submit'
            />
            </Grid>
        </Form>      
    )
}

export default Account
