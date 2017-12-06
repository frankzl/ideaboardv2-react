import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemHeader from "./ItemHeader/ItemHeader";
import AuxWrapper from "../../hoc/AuxWrap";
import ItemBody from "./ItemBody/ItemBody";

import * as actions from '../../store/actions'

import classes from './ItemBlock.css'

class ItemBlock extends Component {

    getInitVisibleState( items ) {
        return items.reduce(
            ( acc, item ) => {
                return (
                    {
                        ...acc,
                        ...item.itemBody.reduce(
                            ( acc, body ) => {
                                const temp = {}
                                temp[ item.idea.title + body.constructor.name ] = false
                                return { ...acc, ...temp }
                            }, {}
                        )
                    }
                )
            }, {}
        )
    }

    componentWillMount() {
        this.props.onInitItems( this.getInitVisibleState( this.props.items ) )
        console.log( this.getInitVisibleState( this.props.items ) )
    }

    render() {
        return this.props.items.map(
            item => {
                return (
                    <AuxWrapper
                        key = { item.idea.title + item.idea.date.getTime() }>
                        <ItemHeader
                            upvotes = { 5 }
                            optValue = { 6 }
                            title = { item.idea.title }
                            author = { item.idea.author }
                            description = { item.idea.description }
                            date = { item.idea.date }
                            bodyInfo = { item.getBodyTypesWithAmount() }
                        />
                        <div className={classes.itemBodiesWrapper}>
                            { item.itemBody.map(
                                body => {
                                    return (
                                        <ItemBody
                                            key = { item.idea.title + body.constructor.name + body.amount }
                                            body = { body }
                                            visible = { this.props.visible[ '' + item.idea.title + body.constructor.name ] }
                                        />
                                    )
                                }
                            ) }
                        </div>
                    </AuxWrapper>
                )
            }
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        visible : state.visibility
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onInitItems : ( items ) => dispatch( { type : actions.VIS_INIT, items : items } )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ItemBlock )