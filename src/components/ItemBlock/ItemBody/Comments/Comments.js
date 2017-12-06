import React from 'react'
import classes from '../ItemBody.css'
import localClasses from './Comments.css'
import { Comment } from "../../../../models/IdeaBody/CommentsModel";

const Comments = ( props ) => {

    comments = [
        new Comment('Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5),
        new Comment('Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5),
        new Comment('Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5)
    ]

    return (
        <div style={{flexDirection: 'column'}} className = { classes.itemWrapper + ' ' +localClasses.commentsWrapper }>
            <div>Comments</div>
            <hr className={localClasses.hr}/>
            {comments.map(
                comment => {
                    return null
                }
            )}
        </div>
    )
}

export default Comments
