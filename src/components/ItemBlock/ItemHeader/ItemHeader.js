import React from 'react'
import classes from './ItemHeader.css'
import HeaderText from "./HeaderText/HeaderText";
import HeaderActions from "./HeaderActions/HeaderActions";

const ItemHeader = (props) => {
    return <div className={classes.itemWrapper}>
        <div className={classes.textWrapper}>
            <HeaderText title={props.title} description={props.description} date={props.date}/>
        </div>
        <div className={classes.actionsWrapper}>
            <HeaderActions upvotes={props.upvotes} optValue={props.optValue} type={props.type}/>
        </div>
    </div>
}
export default ItemHeader