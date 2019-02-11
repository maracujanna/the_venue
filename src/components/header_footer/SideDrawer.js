import React from 'react'
import {scroller} from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

    const scrollToEl = (el) => {
        scroller.scrollTo(el, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -100
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToEl('featured')}>Event starts in</ListItem>
                <ListItem button onClick={()=> scrollToEl('venuenfo')}>Venue NFO</ListItem>
                <ListItem button onClick={()=> scrollToEl('highlights')}>Highlights</ListItem>
                <ListItem button onClick={()=> scrollToEl('pricing')}>Pricing</ListItem>
                <ListItem button onClick={()=> scrollToEl('location')}>Location</ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer