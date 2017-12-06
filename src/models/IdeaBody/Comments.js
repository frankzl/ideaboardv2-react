
export class Comment {
    constructor( author, text, date, upvotes = 0 ){
        this.author = author
        this.text = text
        this.date = date
        this.upvotes = upvotes
    }
}

export default class Comments {
    constructor( text="", comments, amount ){
        this.comments = comments
        this.amount = amount
        this.text = text
    }
}