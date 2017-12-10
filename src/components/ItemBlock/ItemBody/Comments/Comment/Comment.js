import React from 'react'
import { dateToString } from "../../../../../models/AuxFunctions";
import classes from './Comment.css'


const CommentView = ( props ) => {
    return (
        <div style={{
            fontSize: 'small',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
            {props.author}
            </span>
            <span>
                <span style={{ flex: 'auto' }}>
                {props.text}
                </span>
                <span className={classes.date} style={{float: 'right'}}>
                    {dateToString( props.date )}
                </span>
            </span>
        </div>
    )
}

export default CommentView