import {Form} from '../../components/useForm'
import Controls from '../../components/controls/Controls'
import React from 'react'

const Review = (props) => {
    
    const {values, navigation, resetForm, setOpenRegisterPopup} = props
    //console.log(navigation)
    const {go} = navigation

    //handleSubmit
    const handleSubmit = e =>{
        e.preventDefault()
        setOpenRegisterPopup(false)
        resetForm()
        window.alert('yeah')

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Controls.Accordion
                summary='Account'
                details={[
                    {Email : values.email},
                    {Password : values.password},                    
                ]}
                go={go}
            />
            <Controls.Accordion
                summary='Profile'
                details={[
                    {Fullname : values.fullName},
                    {Phone : values.phone},
                    {Gender : values.gender},    
                ]}
                go={go}
            /> 
            <Controls.Button
                text='Submit'
                type='submit'
            />    
        </Form>
    )
}

export default Review
