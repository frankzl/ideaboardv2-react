import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Check from 'material-ui/svg-icons/navigation/check';

import classes from '../ItemBody.css'
import local from './Survey.css'


const Survey = ( props ) => {
    return <div className = { classes.itemWrapper } style = { { backgroundColor : '#E1F5FE', display : 'flex' } }>
        <div style = { { display : 'flex', flex : 'auto', justifyContent : 'center', alignItems : 'center' } }>
            { props.body.options.map(
                option => {
                    return <div style = { { flex : 'auto' } }
                                key = { option.name }>
                        <Checkbox label = { option.name } />
                    </div>
                }
            ) }
            <FloatingActionButton mini = { true } backgroundColor = '#03A9F4'>
                <Check />
            </FloatingActionButton>
        </div>
        <div style = { { flex : 'auto', display : 'flex', justifyContent : 'center' } }>
            <p>Survey</p>
        </div>
    </div>
}

export default Survey