import React,{useState} from 'react'
import Controls from '../../components/controls/Controls'
import { Form, useForm } from '../../components/useForm'



const ChecklistMenu = (props) => {

    const {values, handleInputChange} = useForm({title:''})
    const { onSubmit } = props;

    /**
     * Update Checklist
     */
    const addChecklist = (e)=> {
        e.preventDefault();
        onSubmit(values.title);
    }

    return (
        <Form onSubmit = {addChecklist}>
            <Controls.Input 
                name='title'
                label='Title'
                value={values.title}
                onChange={handleInputChange}
            />
            <Controls.Button
                text='add'
                type='submit'
            />
        </Form>    
     
    )
}

export default ChecklistMenu
