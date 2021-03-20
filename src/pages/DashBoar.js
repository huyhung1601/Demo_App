import React from 'react'
import NavBar from '../components/NavBar'
import PageHeader from '../components/PageHeader'
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

import Controls from '../components/controls/Controls';
import { Grid, Menu, MenuItem, InputAdornment, IconButton } from '@material-ui/core';
import {useForm, Form} from '../components/useForm'
import {MoreVert } from '@material-ui/icons';

const taskList = [
    {id: 1, title: 'Task1', description:'hahahhaa', checkList: '123456' },
    {id: 2, title:'Task2', description:'hahahhaa', checkList: '123456' },
    {id: 3, title:'Task3', description:'hahahhaa', checkList: '123456' },
]

const initialTaskValue={
    title: '',
    description: '',
    checkListL: '',
}

const DashBoar = () => {

    const{values, handleInputChange, setValues, errors, setErrors, resetForm,} = useForm(initialTaskValue);
    
    //Menu
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (e) => {
        setMobileMoreAnchorEl(e.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    };

    const mobileMenuId = 'primay-search-account-menu-mobile';

    //add List
    const createList = (e)=>{
        e.preventDefault()
        console.log(values)        
    }
    const addList = (
        <Menu                       
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin = {{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'left'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}            
        >
            <MenuItem> 
                <Form onSubmit={createList}>
                    <Controls.Input
                        name='task'
                        label='task'
                        value={values.task}
                        onChange={handleInputChange}
                    />
                    <br/>
                    <Controls.Button
                        text='Add list'
                        color='inherit'
                        type='submit'
                    />     
                </Form>              
                          
            </MenuItem>
            <MenuItem>
                           
            </MenuItem>
        </Menu> 
    )
   
    console.log(handleInputChange)

    return (
        <>
            <NavBar/>            
            <PageHeader                           
                icon={<AssignmentReturnedIcon/>}
                button={
                    <Controls.Button   
                        aria-label='show more'
                        aria-controls={mobileMenuId}       
                        aria-haspopup='true'    
                        onClick = {handleMobileMenuOpen}               
                        color='inherit'
                        text='Add'
                    />
                }
                title='Tasks List'
                subTitle='Follow up the task to get achievement'
            />        
            {addList}  
                                
            <Grid container spacing = {1}>
                {taskList.map((item)=>(
                    <Grid item xs={2}>
                        <Controls.Input
                            name={item.id} 
                            value={item.title} 
                            onChange={handleInputChange}                         
                            variant='filled'
                            InputProps={{
                                endAdornment: 
                                <InputAdornment position="top">
                                    <IconButton onClick={()=>alert('edit task')}>
                                        <MoreVert/>
                                    </IconButton>
                                </InputAdornment>                           
                            }}
                        />
                    </Grid>
                ))}
            </Grid>        
            
        </>
    )
}

export default DashBoar
