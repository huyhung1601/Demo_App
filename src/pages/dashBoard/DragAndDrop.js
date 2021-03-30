import React,{useState} from 'react'
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd'
import _ from 'lodash';
import useStyles from './styles'
import {v4} from 'uuid'

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
        },
        'in-progress': {
            title:'In Progress',
            items: [],
        },
        'done': {
            title:"Completed",
            items: [],
        },
    })


    const handleDragEnd = ({destination, source})=>{
        console.log('from', source)
        console.log('to',destination)
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
                               console.log(snapshot)
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
                                                            {el.name}
                                                        </div>
                                                    )
                                                }}
                                            </Draggable>
                                        )
                                    })}
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
