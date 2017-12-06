import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";

import classes from './HeaderActions.css'

const HeaderActions = (props) => {

    let reqIcon = 'comment'

    switch( props.type ){
        case 'idea': reqIcon = 'comment'
            break;
        case 'survey': reqIcon = 'people'
            break;
    }

    return <AuxWrapper>
        <div className={classes.actionContainer}>
            <span className={classes.actionChildContainer}><i className="material-icons">{reqIcon}</i></span>
            <span>{props.optValue}</span>
        </div>
        <div className={classes.actionContainer}>
            <span className={classes.actionChildContainer}><i className="material-icons">thumb_up</i></span>
            <span>{props.upvotes}</span>
        </div>
    </AuxWrapper>
}

export default HeaderActions