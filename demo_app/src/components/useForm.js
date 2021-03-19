import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core'

const initialUserValues = {
    email: '',
    password: '',
    password2: '',
    phone:'',
    gender: 'male',
    fullName: '',    
}

export const useForm = () => {

    const [ values, setValues] = useState(initialUserValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () =>{
        setValues(initialUserValues);
        setErrors({})
    }

    return {
        values,
        handleInputChange,
        setValues,
        errors,
        setErrors,
        resetForm,
    }
}

const useStyles = makeStyles((theme)=>({
    root:{
        
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1),
        },
        '& .MuiButtonBase-root':{
            margin: theme.spacing(2),
            left: theme.spacing(1),
        }
    }
}))

export const Form = (props) =>{

    const classes = useStyles()
    const {children, ...other} = props
    return(
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )
}
