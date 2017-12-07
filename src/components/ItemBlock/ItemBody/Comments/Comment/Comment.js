import React from 'react'
import { dateToString } from "../../../../../models/AuxFunctions";

const CommentView = ( props ) => {
    return (
        <div style={{fontSize: 'small', marginBottom: '10px', display:'flex'}}>
            <span style={{fontWeight:'bold', marginRight: '10px'}}>
            {dateToString(props.date)+' '+props.author + ': '}
            </span>
            <span style={{flex: 'auto'}}>
            {props.text}
            </span>
        </div>
    )
}

export default CommentView