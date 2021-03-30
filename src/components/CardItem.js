import React, {useState} from 'react'
import { Grid, InputAdornment, IconButton, } from '@material-ui/core';
import Controls from '../components/controls/Controls';
import {MoreVert } from '@material-ui/icons';


/**
 * Card Item
 * @props {data: {id, title}, onCHange(value)}
 */
export const CardItem = ({ data, onChange }) => {

    return (<Grid item>
        <Controls.Input
            name='title'
            value={data.title}
            onChange={(e)=>onChange(e.target.value)}
            variant='filled'
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </InputAdornment>
            }}
        />
    </Grid>);
}