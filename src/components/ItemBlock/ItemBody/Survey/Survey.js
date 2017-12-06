import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Check from 'material-ui/svg-icons/navigation/check';

import classes from '../ItemBody.css'


const Survey = ( props ) => {
    return <div className = { classes.itemWrapper }>
        { props.body.options.map(
            option => {
                return <Checkbox
                    label = { option.name } />
            }
        ) }
        <FloatingActionButton mini={true}>
            <Check/>
        </FloatingActionButton>
    </div>
}

export default Survey