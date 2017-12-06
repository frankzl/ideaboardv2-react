export class Option {
    constructor( name, votes ) {
        this.name = name
        this.votes = votes
    }
}

class Survey {
    constructor( options ) {
        this.options = options
        this.amount = options.reduce(
            (acc, option) => acc + option.votes,
            0
        )
        console.log(options)
    }
}

export default Survey