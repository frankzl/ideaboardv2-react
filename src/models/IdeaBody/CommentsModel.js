
export class Comment {
    constructor( author, text, date, upvotes = 0, subcomments=[] ){
        this.author = author
        this.text = text
        this.date = date
        this.upvotes = upvotes
        this.subcomments = subcomments
    }
}

export default class Comments {
    constructor( text="", comments, amount=0 ){
        this.comments = comments
        this.amount = amount
        this.text = text
    }
}