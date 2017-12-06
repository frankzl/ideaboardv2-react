import classes from './HeaderText.css'
import React, { Component } from 'react'
import AuxWrapper from "../../../../hoc/AuxWrap";
import { connect } from 'react-redux'

import * as actionTypes from '../../../../store/actions'

const dateToString = ( date ) => {
    const splitDate = date.toDateString().split( ' ' )
    const day = splitDate[ 1 ] + ' ' + splitDate[ 2 ]
    const time = date.toTimeString().split( ':' )
    return day + ' - ' + time[ 0 ] + ':' + time[ 1 ]
}

class HeaderText extends Component {
    render() {
        return <AuxWrapper>
        <span className = { classes.textContainer }>
            <p className = { classes.title }>{ this.props.title }</p>
            <p className = { classes.description }>{ this.props.description }</p>
        </span>
            <span className = { classes.dateContainer }>
            <p>{ dateToString( this.props.date ) }</p>
        </span>
        </AuxWrapper>
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        onCommentsClicked : () => dispatch( { type : actionTypes.VIS_INIT } )
    }
}

export default connect( null, mapDispatchToProps )( HeaderText )