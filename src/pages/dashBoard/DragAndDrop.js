import React,{useState,useEffect} from 'react'
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd'
import _ from 'lodash';
import useStyles from './styles'
import {v4} from 'uuid'
import Controls from '../../components/controls/Controls';
import {InputAdornment, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete' 
const item1={
    id: v4(),
    name: 'Clean the house'
}
const item2={
    id: v4(),
    name: 'Laundry'
}

const DragAndDrop = () => {
    const classes= useStyles()
    
    const [state,setState] = useState({
        'todo':{
            title:'Todo',
            items: [item1,item2],
            newTask:'',
        },
        'in-progress': {
            title:'In Progress',
            items: [],
            newTask:'',
        },
        'done': {
            title:"Completed",
            items: [],
            newTask:'',
        },
    })
    useEffect(()=>{
        setState(state)
    },[])
    const handleChange = (index,e) =>{
        const {name,value} = e.target;
        const newState={ ...state,[index]:_.map(state,(data,key)=>key===index)?{...state[index], [name]: value}:state[index]}
        setState(newState)
    }

    const handleAddTask = (index, value)=>{
        const newItem={id: v4(), name: value}
        state[index].items.push(newItem)
        const newState={ ...state,[index]:_.map(state,(data,key)=>key===index)?{...state[index], newTask: ''}:state[index]}
        setState(newState)
    }

    const deleteTask = (item,index) =>{
        const {title, items, newTask} = state[index]
        const newState={...state,[index]: {title, newTask, items: items.filter(x=>x!==item)}}
        setState(newState)
    }

    const handleDragEnd = ({destination, source})=>{
        if(!destination){
            console.log('not dropped in droppable')
            return
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId){
            console.log(' dropped in droppable')
            return
        }

        const itemCopy ={... state[source.droppableId].items[source.index]}
        setState(prev => {
            prev = {...prev}
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)
      
      
            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
            
            return prev
            
          })

    }
    return (
        <div className={classes.App}>
            <DragDropContext onDragEnd={handleDragEnd}>
                {_.map(state,(data,key)=>{
                    
                   return (
                       <div key={key}className={classes.column}>
                           <h3>{data.title}</h3>
                           <Droppable droppableId={key}>
                           {(provided, snapshot)=>{
                               return(
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={classes.droppableCol}
                                >
                                    {data.items.map((el:T,index:number)=>{
                                        return(
                                            <Draggable key={el.id} index={index} draggableId={el.id}>
                                                {(provided, snapshot)=>{
                                                    return(
                                                        <div
                                                            className={classes.item}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <IconButton className={classes.MuiButtonBase} onClick={()=>deleteTask(el,key)}>
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                            {el.name}                                                            
                                                        </div>
                                                    )
                                                }}
                                            </Draggable>
                                        )
                                    })}
                                    <Controls.Input
                                        className={classes.addTask}
                                        key={key}
                                        name='newTask'
                                        label='task'
                                        value={data.newTask}
                                        onChange={e=>handleChange(key,e)}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick= {()=>handleAddTask(key,data.newTask)}
                                                        edge="end"
                                                        showPassword='showPassword'
                                                    >
                                                        <AddIcon/>
                                                    </IconButton>
                                                </InputAdornment>
                                        }}
                                    />
                                    {provided.placeholder}
                                </div>                                    
                                )
                           }}
                       </Droppable>
                       </div>
                   )    
                })}
            </DragDropContext>
        </div>
    )
}

export default DragAndDrop
