import Comments from "./IdeaBody/CommentsModel";

class Idea {
    constructor( title, author, description, date ) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.date = date;
    }
}

export default Idea