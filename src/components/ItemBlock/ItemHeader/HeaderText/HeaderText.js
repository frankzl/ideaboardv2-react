import classes from './HeaderText.css'
import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";

const dateToString = (date) => {
    const splitDate = date.toDateString().split( ' ' )
    const day = splitDate[1] + ' ' + splitDate[2]
    const time = date.toTimeString().split(':')
    return day + ' - ' + time[0] + ':' + time[1]
}

const HeaderText = ( props ) => {
    return <AuxWrapper>
        <span className={classes.textContainer}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.description}>{props.description}</p>
        </span>
        <span className={classes.dateContainer}>
            <p>{dateToString(props.date)}</p>
        </span>
    </AuxWrapper>
}
export default HeaderText