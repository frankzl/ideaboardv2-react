import React from 'react'
import classes from './ItemBody.css'
import Comments from "./Comments/Comments";
import Survey from "./Survey/Survey";

const ItemBody = (props) => {

    if (!props.visible) return null

    switch (props.body.constructor.name){
        case 'Comments': return <Comments body={props.body}/>
            break;
        case 'Survey': return <Survey body={props.body}/>
    }

    return <div className={classes.itemWrapper}>
        Testing Works
    </div>
}

export default ItemBody