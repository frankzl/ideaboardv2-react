import React from 'react'
import Checkbox from 'material-ui/Checkbox'

import classes from '../ItemBody.css'


const Survey = (props) => {
    return <div className={classes.itemWrapper}>
        {props.body.options.map(
            option => {
                return <Checkbox
                    label={option.name} />
            }
        )}
        </div>
}

export default Survey