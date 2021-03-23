import React, { useState } from 'react'
import Controls from '../../components/controls/Controls'
import {Search} from '@material-ui/icons'
import {InputAdornment,FormControl,FormLabel,FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import {Form} from '../../components/useForm'

const MemberMenu = (props) => {   
    const {member, onMemberChange} = props

    return (
        <Form>
            <Controls.Input
                label ='Search'                          
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>)}}
            />  
            <br/>          
            <FormControl component='fieldset'>
                <FormLabel component='legend'>Board Members</FormLabel>
                    <FormGroup column>
                        {
                            member.map((item,index)=>(
                                <FormControlLabel
                                    key={item.id}                                    
                                    control={<Checkbox
                                        checked={item.align} 
                                        name={item.name}
                                        color='primary'                                         
                                        onChange={(e)=>(onMemberChange(item.id, e.target.checked))}
                                    />}
                                    label={item.name}
                                    labelPlacement='end'
                                />
                            ))
                        }
                    </FormGroup>
            </FormControl>
        </Form>
    )
}

export default MemberMenu
