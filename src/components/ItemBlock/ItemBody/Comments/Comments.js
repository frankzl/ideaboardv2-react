import React from 'react'
import classes from '../ItemBody.css'
import localClasses from './Comments.css'
import { Comment } from "../../../../models/IdeaBody/CommentsModel";
import CommentView from "./Comment/Comment";

const Comments = ( props ) => {

    const comments = [
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
                    return <CommentView key={Math.random()} author={comment.author} text={comment.text} date={comment.date}/>
                }
            )}
        </div>
    )
}

export default Comments
