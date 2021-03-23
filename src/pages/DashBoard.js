import React, {useState, useEffect} from 'react'

import PageHeader from '../components/PageHeader'
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

import Controls from '../components/controls/Controls';
import { Grid, Menu, MenuItem, } from '@material-ui/core';
import {useForm, Form} from '../components/useForm'
import {CardItem} from '../components/CardItem'
import Tasks from '../components/Tasks';


/** Data From server */
const taskListMock = [    
    {id: 1, title: 'Todo', task: 'Check-app', description:'hahahhaa', member: '123456' },
    {id: 2, title:'Doing', task: 'Creat-app', description:'hahahhaa', member: '123456' },
    {id: 3, title:'Done', task: 'nothing', description:'hahahhaa', member: '123456' },
]

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

    // effect on page load
    useEffect(()=>{
       // call server
       // get task list
       updateTaskList(taskListMock);
    },[]);

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
        const createdTask = {id: 4, title:values.task}
        // const createdTask = createTaskApi(values.task); {id:xxx, ...}

        // add new item to state
        const newList = [...taskList, createdTask];
        updateTaskList(newList);       
    } 

    const updateTitle = (findId, newTitle)=>{
        const newList = taskList.map(x=>x.id === findId?{...x, title:newTitle}:x);
        updateTaskList(newList);
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
   
    

    return (
        <>
                       
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
                               
            <Grid container spacing = {1} >
                {taskList.map((item,index)=>(
                    <Grid container xs={2} direction='column' spacing={1}>                                 
                    <CardItem data={item} key={item.id} onChange={(value)=>updateTitle(item.id, value)}/>                    
                    <Tasks/>
                    </Grid> 
                    // <Grid item xs={2} key={item.id}>
                    //     <Controls.Input
                    //         name='title'
                    //         value={item.title} 
                    //         onChange={(e)=>updateTitle(item.id, e.target.value)}                         
                    //         variant='filled'
                    //         InputProps={{
                    //             endAdornment: 
                    //             <InputAdornment position="top">
                    //                 <IconButton onClick={()=>updateTitle(item.id, item.title)}>
                    //                     <MoreVert/>
                    //                 </IconButton>
                    //             </InputAdornment>                           
                    //         }}
                    //     />
                    // </Grid>
                ))}
            </Grid>        
            <pre><code>{JSON.stringify(taskList)}</code></pre>
            
        </>
    )
}

export default DashBoar
