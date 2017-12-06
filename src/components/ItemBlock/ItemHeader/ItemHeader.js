import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions'

import classes from './ItemHeader.css'
import HeaderText from "./HeaderText/HeaderText";
import HeaderActions from "./HeaderActions/HeaderActions";

class ItemHeader extends Component {
    render() {
        return <div className = { classes.itemWrapper }>
            <div className = { classes.textWrapper }
                 onClick = { () => this.props.onTextClicked( this.props.title ) }>
                <HeaderText
                    title = { this.props.title }
                    author = { this.props.author }
                    description = { this.props.description }
                    date = { this.props.date } />
            </div>
            <div className = { classes.actionsWrapper }>
                <HeaderActions
                    onCommentsClicked = { () => this.props.onCommentsClicked( this.props.title ) }
                    onSurveyClicked = { () => this.props.onSurveyClicked( this.props.title ) }
                    upvotes = { this.props.upvotes }
                    bodyInfo = { this.props.bodyInfo } />
            </div>
        </div>
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onTextClicked : ( title ) => dispatch( { type : actionTypes.VIS_ALL, title : title } ),
        onCommentsClicked : ( title ) => dispatch( { type : actionTypes.VIS_COMMENTS, title : title } ),
        onSurveyClicked : ( title ) => dispatch( { type : actionTypes.VIS_SURVEY, title : title } )
    }
}
export default connect( null, mapDispatchToProps )( ItemHeader )