
class Item {
    constructor( idea, itemBody ) {
        this.idea = idea
        this.itemBody = itemBody
    }

    getBodyTypesWithAmount(){
        return this.itemBody.map(
            body => {
                return {
                    type: body.constructor.name,
                    amount: body.amount
                }
            }
        )
    }
}

export default Item