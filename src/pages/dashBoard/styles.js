import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    App:{
        display: 'flex',
        width: '100%',
        justifyContent: 'leftStart'
    },
    column:{
        width: "25%",
        marginLeft: theme.spacing(2)
    },
    droppableCol:{
        width: "80%%", 
        backgroundColor: 'gray',
        padding: theme.spacing(1),
        borderRadius: '7px',
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        marginBottom: theme.spacing(1),
        color: 'white',
        border: ' 1px solid white',
        padding: theme.spacing(0.5),
        borderRadius: '7px',
        '& .dragging':{
            backgroundColor: 'coral'
        }
    },
    addTask: {
        paddingTop: theme.spacing(1),
    },
    MuiButtonBase: {
        marginLeft: theme.spacing(1)
    }

}))
