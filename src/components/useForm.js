import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core'



export const useForm = (initialValues) => {

    const [ values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () =>{
        setValues(initialValues);
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
        margin: theme.spacing(3),
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1),
            
        },
        '& .MuiButtonBase-root':{
            margin: theme.spacing(1),
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
