import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";

import classes from './HeaderActions.css'

const HeaderActions = (props) => {

    let reqIcon = 'comment'

    return <AuxWrapper>
        {props.bodyInfo.map(
            (body) => {
                switch( body.type ){
                    case 'Survey': reqIcon = 'people'
                        break;
                    case 'Comments': reqIcon = 'comments'
                        break;
                }
                return <div key={body.type} className={classes.actionContainer}>
                    <span className={classes.actionChildContainer}><i className="material-icons">{reqIcon}</i></span>
                    <span>{body.amount}</span>
                </div>
            }
        )}
        <div className={classes.actionContainer}>
            <span className={classes.actionChildContainer}><i className="material-icons">thumb_up</i></span>
            <span>{props.upvotes}</span>
        </div>
    </AuxWrapper>
}

export default HeaderActions