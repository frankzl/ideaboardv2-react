import React from 'react'
import classes from '../ItemBody.css'
import localClasses from './Comments.css'
import { Comment } from "../../../../models/IdeaBody/CommentsModel";
import CommentView from "./Comment/Comment";

import ContentAddCircle from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const Comments = ( props ) => {

    const comments = [
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 ),
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 ),
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 )
    ]

    return (
        <div className = { classes.itemWrapper + ' ' + localClasses.commentsWrapper }>
            <div style = { { flex : 'auto' } }>
                { comments.map(
                    comment => {
                        return <CommentView key = { Math.random() } author = { comment.author } text = { comment.text }
                                            date = { comment.date } />
                    }
                ) }
            </div>
            <div>
                <FloatingActionButton mini={true} backgroundColor='#03A9F4'>
                    <ContentAddCircle></ContentAddCircle>
                </FloatingActionButton>
            </div>
        </div>
    )
}

export default Comments
