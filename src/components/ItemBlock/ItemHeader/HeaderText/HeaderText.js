import classes from './HeaderText.css'
import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";

const HeaderText = ( props ) => {
    return <AuxWrapper>
        <span className={classes.textContainer}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.description}>{props.description}</p>
        </span>
        <span>
            <p>{(new Date()).toDateString()}</p>
        </span>
    </AuxWrapper>
}
export default HeaderText