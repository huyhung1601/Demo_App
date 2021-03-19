import { Grid } from '@material-ui/core'
import React from 'react'
import Controls from '../../components/controls/Controls'
import {Form} from '../../components/useForm'

const genderItems=[
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]

const Profile = (props) => {

    const {values,onChange,navigation} = props
    
    return (
        <Form>
            <Grid container >
                <Controls.Input
                        name='full Name'
                        label= 'Full Name'
                        value={values.fullname}
                        onChange={onChange}
                        
                />
                <Controls.Input
                        name='phone'
                        label= 'Phone'
                        value={values.phone}
                        onChange={onChange}
                        
                />
                <Controls.RadioGroup row
                        name='gender'
                        value={values.gender}
                        onChange={onChange}
                        items={genderItems}
                        label='Gender'
                />
                <Controls.Button
                    text="Previous"
                    color='secondary'
                    onClick={()=>navigation.previous()}
                />
                <Controls.Button
                    text="Continue"
                    onClick={()=>navigation.next()}
                />
            </Grid>
        </Form>
    )
}

export default Profile
