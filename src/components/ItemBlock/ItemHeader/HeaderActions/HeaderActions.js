import React from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";

import RaisedButton from 'material-ui/RaisedButton';

import classes from './HeaderActions.css'

const HeaderActions = ( props ) => {

    let reqIcon = 'comment'

    return <AuxWrapper>
        { props.bodyInfo.map(
            ( body ) => {
                let toggleFunc
                switch ( body.type ) {
                    case 'Survey':
                        reqIcon = 'people'
                        toggleFunc = props.onSurveyClicked
                        break;
                    case 'Comments':
                        reqIcon = 'comments'
                        toggleFunc = props.onCommentsClicked
                        break;
                }
                return <div key = { body.type }
                            onClick={toggleFunc}
                            className = { classes.actionContainer }>
                    <span className = { classes.actionChildContainer }><i
                        className = "material-icons">{ reqIcon }</i></span>
                    <span>{ body.amount }</span>
                </div>
            }
        ) }
        <div className = { classes.actionContainer }>
            <span className = { classes.actionChildContainer }><i className = "material-icons">thumb_up</i></span>
            <span>{ props.upvotes }</span>
        </div>

    </AuxWrapper>
}

export default HeaderActions