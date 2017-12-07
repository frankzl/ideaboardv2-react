export class Option {
    constructor( name, votes ) {
        this.name = name
        this.votes = votes
    }
}

class Survey {
    constructor( options, question='' ) {
        this.options = options
        this.question = question
        this.amount = options.reduce(
            (acc, option) => acc + option.votes,
            0
        )
        console.log(options)
    }
}

export default Survey