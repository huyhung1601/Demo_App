import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

const useStyles = makeStyles((theme)=>({
    pageContent:{
        margin: theme.spacing(1),
        padding: theme.spacing(5)
    }
}))

const TasksForm = () => {

    const classes= useStyles()
    return (
        <Paper >
            <PageHeader
                icon={<DeveloperBoardIcon/>}
                title='Project Setup'
            />
            <Grid container space={2} className={classes.pageContent}>
                <Grid xs={9}>
                    details
                </Grid>
                <Grid xs={3}>
                    buttons
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TasksForm
