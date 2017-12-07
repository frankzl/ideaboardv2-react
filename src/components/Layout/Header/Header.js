import React from 'react'
import AppBar from 'material-ui/AppBar'

const d1 = new Date()
const d0 = new Date(d1.getTime() + 10*60*1000)

const Header = (props) => {
    return (<AppBar
        title="Ideaboardv2"
    >
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            color: 'white'
        }}><p>time left {Math.floor((d0.getTime()/1000- (new Date()).getTime()/1000)/60)}:{Math.floor(d0.getTime()/1000- (new Date()).getTime()/1000)%60}</p></div>
    </AppBar>)
}

export  default Header