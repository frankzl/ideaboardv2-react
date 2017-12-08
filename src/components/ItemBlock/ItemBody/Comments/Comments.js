import React from 'react'
import classes from '../ItemBody.css'
import localClasses from './Comments.css'
import { Comment } from "../../../../models/IdeaBody/CommentsModel";
import CommentView from "./Comment/Comment";

import ContentAdd from 'material-ui/svg-icons/content/add-circle-outline';
import CommunicationComment from 'material-ui/svg-icons/communication/comment'


const Comments = ( props ) => {

    const comments = [
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 ),
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 ),
        new Comment( 'Frank', 'fdsakjlf dfa d fasdfjdasl', new Date(), 5 )
    ]

    return (
        <div className = { classes.itemWrapper + ' ' + localClasses.commentsWrapper }>
            <div>
                <CommunicationComment color={'gray'}/>
                <ContentAdd color={'gray'}/>
                <hr className={localClasses.hr}/>
            </div>

            <div style = { { flex : 'auto' } }>
                { comments.map(
                    comment => {
                        return <CommentView key = { Math.random() } author = { comment.author } text = { comment.text }
                                            date = { comment.date } />
                    }
                ) }
            </div>
        </div>
    )
}

export default Comments
