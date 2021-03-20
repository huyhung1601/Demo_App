import { AppBar, Grid, Toolbar ,InputAdornment} from '@material-ui/core'
import { AccountBox, Assignment, Home, Mail, More, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import Controls from './controls/Controls'

const NavBar = () => {
    return (
        <AppBar position= 'static'>
            <Toolbar>
                <Grid container spacing ={1}>
                    <Grid item>
                        <Controls.IconButton>
                            <More/>
                        </Controls.IconButton>
                    </Grid>
                    <Grid item>
                        <Controls.IconButton>
                            <Home/>
                        </Controls.IconButton>
                    </Grid>
                    <Grid item>
                        <Controls.IconButton>
                            <Assignment/>
                            Boards
                        </Controls.IconButton>
                    </Grid>
                    <Grid item>
                        <Controls.Input
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)}}
                        />
                    </Grid>
                    <Grid item sm>                       
                    </Grid>
                    <Grid item>
                        <Controls.IconButton>
                            <Mail/>
                        </Controls.IconButton>
                        <Controls.IconButton>
                            <Notifications/>
                        </Controls.IconButton>
                        <Controls.IconButton>
                            <AccountBox/>
                        </Controls.IconButton>
                    </Grid>
                </Grid>
            </Toolbar>            
        </AppBar>
    )
}

export default NavBar
