import React, {useState, useEffect} from 'react'
import PageHeader from '../components/PageHeader'
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Controls from '../components/controls/Controls';
import { Grid, Menu, MenuItem,InputAdornment,IconButton, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import {useForm, Form} from '../components/useForm'
import DragAndDrop from './dashBoard/DragAndDrop';


const initialTaskValue={
    id: '',
    title: '',
    task: '',
    description: '',
    checkList: '',
}

const DashBoar = () => {

    const{values, handleInputChange, resetForm,} = useForm(initialTaskValue);
    const [taskList, updateTaskList] = useState([]);

    //Menu
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // // effect on page load
    // useEffect(()=>{
    //    // call server
    //    // get task list
    //    updateTaskList(taskListMock);
    // },[]);

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
        // send data to server        
        // const createdTask = createTaskApi(values.task); {id:xxx, ...}
        // add new item to state
        setMobileMoreAnchorEl(null)
        addList(values.task);       
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
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        type='submit'
                                        edge="end"
                                        showPassword='showPassword'
                                    >
                                        <AddIcon/>
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </Form>                
            </MenuItem>
        </Menu> 
    )
   
    return (
        <>                      
            <PageHeader                           
                icon={<AssignmentReturnedIcon/>}
                // button={
                //     <Controls.Button   
                //         aria-label='show more'
                //         aria-controls={mobileMenuId}       
                //         aria-haspopup='true'    
                //         onClick = {handleMobileMenuOpen}               
                //         color='inherit'
                //         text='Add'
                //     />
                // }
                title='Tasks List'
                subTitle='Follow up the task to get achievement'
            />        
            {addList}  
            {/*<pre><code>{JSON.stringify(taskList)}</code></pre>                   
             <Grid container spacing = {1} >
                {taskList.map((item,index)=>(
                    <Grid container xs={3} direction='column' spacing={1}>                                 
                    <CardItem data={item} key={item.id} onChange={(value)=>updateTitle(item.id, value)}/>                    
                    <Tasks/>
                    <Controls.Button
                        text='Add Task'
                    />
                    </Grid> 
                ))}
            </Grid>  */}
            <DragAndDrop/>       
           
        </>
    )
}

export default DashBoar
