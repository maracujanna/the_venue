import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'

export default class header extends Component {
  render() {
    return (
      <div>
        <AppBar 
          position="fixed"
          style={{
            backgroundColor:'#2f2f2f',
            boxShadow:'none',
            padding:'10px'
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className=" header_logo_venue">The Venue</div>
              <div className="header_logo_title font_secondary">MUSICAL EVENTS</div>
            </div>

          </Toolbar>
        </AppBar>
          
        
    
      </div>
    )
  }
}
