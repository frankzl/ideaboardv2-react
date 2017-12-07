import classes from './HeaderText.css'
import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";
import {dateToString} from "../../../../models/AuxFunctions";

const HeaderText = ( props ) => {
    return <AuxWrapper>
        <span className = { classes.textContainer }>
            <p className = { classes.title }>{ props.title }</p>
            <p className = { classes.description }>{ props.description + ' - ' + props.author }</p>
        </span>
        <span className = { classes.dateContainer }>
            <p>{ dateToString( props.date ) }</p>
        </span>
    </AuxWrapper>
}

export default HeaderText