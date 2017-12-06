export class Option {
    constructor( optionText, votes ) {
        this.optionText = optionText
        this.votes = votes
    }
}

class Survey {
    constructor( options, amount=0 ) {
        this.options = options
        this.amout = amount
    }
}

export default Survey