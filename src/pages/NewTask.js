import React, {useState} from 'react'
import {Grid, IconButton, FormControlLabel, Checkbox,Typography, FormGroup,InputAdornment} from '@material-ui/core'
import Controls from '../components/controls/Controls'
import { Form, useForm } from '../components/useForm'
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Close, Delete, } from '@material-ui/icons';
import DescriptionIcon from '@material-ui/icons/Description';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MemberMenu from './dashBoard/MemberMenu';
import ChecklistMenu from './dashBoard/ChecklistMenu';
import {useHistory} from 'react-router-dom'

// mock data static/unchanged
const mockMembers = [
    {id: 1, name: 'Henry', align: true},
    {id: 2, name: 'Jason', align: false},
    {id: 3, name: 'Tom', align: false},
]

const initialTaskValue={
    id: '',
    member: '',
    title: '',
    task: '',
    description: '',
    checkList: '',
    dueDate: new Date(),
}
const NewTask = () => {
    const history = useHistory()
    const {values, handleInputChange, resetForm} = useForm(initialTaskValue);
    const [member, setMember  ]= useState(mockMembers);
   
    const handleSubmit=()=>{
        history.push('/admin')
    }
    /**
     * Handle mobileMemberMenu
     */
    const [memberMenuAnchorEl, setMemberMenuAnchoEl] = useState(null);
    const handleMemberChange = (id, checked) =>{
        const newMember=member.map(x =>x.id== id?{...x, align: checked}:x)
        setMember(newMember)        
    }

    
    const alignMember= member.filter(x=>x.align==true)    
    
    const memberMenu=(
        <Form>
        <Controls.Menu
            id='mobileMemberMenu'
            anchorEl={memberMenuAnchorEl}
            onClose={()=>setMemberMenuAnchoEl(null)} 
            open={Boolean(memberMenuAnchorEl)}
            text='Members'
        >            
            <MemberMenu
                member={member}
                onMemberChange={handleMemberChange}
            />            
        </Controls.Menu>
        </Form>
    )
    const openMemberMenu = (e)=>{
        setMemberMenuAnchoEl(e.currentTarget);
    }

    /**
     * Handle mobileLableMenu
     */
    const [labelMenuAnchorEl, setLabelMenuAnchoEl] = useState(null);
    const labelMenu = (
        <Controls.Menu
            id='mobileLabelMenu'
            anchorEl={labelMenuAnchorEl}
            onClose={()=>setLabelMenuAnchoEl(null)} 
            open={Boolean(labelMenuAnchorEl)}
            text="Label"
        >            
        </Controls.Menu>
    )
    const openLabelMenu = (e)=>{
         setLabelMenuAnchoEl(e.currentTarget);
    }

    /**
     * Handle mobileChecListMenu
     */
    const [checklistMenuAnchorEl, setChecklistMenuAnchoEl] = useState(null);
    const [checklist, setChecklist] = useState([{title: 'Hello', align: false}])
    const onAddMenu = (value) => {
        const createItem ={title : value, align: false}
        const newChecklist = [...checklist,createItem]
        setChecklist(newChecklist)        
    }  
    
    const handleAlignChecklist = (id, checked)=>{
        const checkChecklist=checklist.map((x,index)=>id==index?{...x, align: checked,}:x)
        setChecklist(checkChecklist)
    }


    const handleChecklistTitle = (id, newTitle) =>{
        const newChecklist=checklist.map((x,index)=>id==index?{...x, title: newTitle,}:x)
        setChecklist(newChecklist)
    }

    const handleCheclist =(id, e) =>{
        const newChecklist=checklist.filter((x,index)=>id!=index)
        setChecklist(newChecklist)
    }
    const checklistMenu = (
        <Controls.Menu
            id='mobileChecklistMenu'
            anchorEl={checklistMenuAnchorEl}
            onClose={()=>setChecklistMenuAnchoEl(null)} 
            open={Boolean(checklistMenuAnchorEl)}
            text="Checklist"
        >
            <ChecklistMenu onSubmit={onAddMenu} />            
        </Controls.Menu>
    )
    const openChecklistMenu = (e)=>{
        setChecklistMenuAnchoEl(e.currentTarget);
    }

    /**
     * Handle due date menu
     */
    return (
        <Form>
            <Grid container spacing={1} >
               <Grid item xs={12} direction='row'container >
                    <Grid xs={1}>                        
                        <AssignmentIcon color='inherit' size='large'/>
                    </Grid>
                    <Grid xs={10}>                        
                        <Controls.Input
                            label='New Task'
                            name='task'
                            value={values.task}
                            variant='standard'                            
                            onChange={handleInputChange}
                    />   
                    </Grid>
                   <Grid xs>
                        <IconButton onClick={handleSubmit}>
                            <Close/>
                        </IconButton>
                   </Grid>
                   
               </Grid>
               <Grid item xs={9} container>
                    <Grid item xs={1}/>
                    <Grid item xs={11}>                        
                        <Typography>MEMBERS</Typography>
                        <FormGroup row>
                        {
                            alignMember.map((item,index)=>(
                                <FormControlLabel
                                    key={item.id}
                                    control={
                                        <Checkbox
                                            checked={item.align}
                                            name={item.name}
                                            color='primary'
                                            onChange={(e)=>(handleMemberChange(item.id, e.target.checked))}
                                        />
                                    }
                                    label={item.name}
                                    labelPlacement='top'
                                />
                            ))
                        }
                        </FormGroup>
                    </Grid>
                    <Grid item xs={1}>                        
                        <DescriptionIcon/>                        
                    </Grid>
                    <Grid item xs={11} >
                        <Typography>Description</Typography>
                        <Controls.Input
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={1}>                        
                        <AssignmentTurnedInIcon/>                        
                    </Grid>
                    <Grid item xs={11} >
                        <div>
                        <Typography>Checklist</Typography>
                        <FormGroup>
                        {checklist.map((item,index)=>(
                        
                        <FormControlLabel
                            key={index}                                    
                            control={<Checkbox 
                                    checked={item.align}                   
                                    color='primary' 
                                    name={item.title} 
                                    onChange={e=>{handleAlignChecklist(index,e.target.checked)}}                          
                                />}
                            label={
                                <Controls.Input
                                    variant='standard'
                                    value={item.title}
                                    onChange={e=>handleChecklistTitle(index, e.target.value)}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton onClick={e=>handleCheclist(index, e.target)}>
                                                    <Delete />
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                    
                                />
                                
                            }
                            labelPlacement='end'
                        />                        
                                             
                        ))}
                        </FormGroup>
                        </div>
                    </Grid>
               </Grid>
               <Grid item xs={3} container direction='column'>
                    <Controls.Button
                        startIcon={<PermIdentityIcon/>} 
                        text='Members'
                        color='inherit'
                        onClick={openMemberMenu}                        
                        aria-controls='mobileMemberMenu '      
                        aria-haspopup='true'          
                    />                   
                    <Controls.Button
                        startIcon={<LocalOfferIcon/>} 
                        text='Labels'
                        color='inherit'
                        onClick={openLabelMenu}
                        ria-controls='mobileLabelMenu '      
                        aria-haspopup='true' 
                    />                   
                    <Controls.Button
                        startIcon={<AssignmentTurnedInIcon/>} 
                        text='CheckList'
                        color='inherit'
                        onClick={openChecklistMenu}
                        ria-controls='mobileLabelMenu '      
                        aria-haspopup='true' 
                    />
                    <Controls.DatePicker
                        name='dueDate'
                        label="Due Date"
                        value={values.dueDate}
                        onChange={handleInputChange}
                    />
                   
               </Grid>
            </Grid>  
            {memberMenu}  
            {labelMenu}
            {checklistMenu}
        </Form>
    )
}

export default NewTask




// const Admin = () => {
//     const personData = {name: 'hello'}
//     let [title, setTitle] = useState('title');
//     let [person, setPerson] = useState(personData);

//     const handleClick = ()=>{
//         setTitle("world");
//         personData.name = "world";
//         setPerson(personData);
//     }
//     return (
//         <>
//         <h1>New Task</h1>
//         <h6>{title}</h6>
//         <h6>name: {person.name}</h6>
//         <button onClick={handleClick}>Update</button>
//         </>
//     );
// }