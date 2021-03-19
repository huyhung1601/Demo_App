import React from 'react'
import {Accordion as MuiAccordion, AccordionDetails, AccordionSummary, IconButton, ListItemText} from '@material-ui/core'
import { Edit, ExpandMore } from '@material-ui/icons'
const Accordion = (props) => {

    const {summary, details,go} = props
    return (
        <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {details.map((data, index)=>{
                        const objKey = Object.keys(data)[0];
                        const objValue = data[Object.keys(data)[0]];
                        return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                    })}
                    <IconButton 
                        color='primary' 
                        component='span'
                        onClick={()=> go(`${summary.toLowerCase()}`)}
                    >
                        <Edit/>
                    </IconButton>
                </div>
            </AccordionDetails>
        </MuiAccordion>
    )
}

export default Accordion
