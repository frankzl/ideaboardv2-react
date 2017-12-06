import React from 'react'
import ItemHeader from "./ItemHeader/ItemHeader";
import AuxWrapper from "../../hoc/AuxWrap";
import ItemBody from "./ItemBody/ItemBody";

const ItemBlock = ( props ) => {
    return props.items.map(
        item => {
            return (
                <AuxWrapper
                    key={ item.idea.title + item.idea.date.getTime() }>
                    <ItemHeader
                        upvotes={ 5 }
                        optValue={ 6 }
                        title={ item.idea.title }
                        author={ item.idea.author }
                        description={ item.idea.description }
                        date={ item.idea.date }
                        bodyInfo={item.getBodyTypesWithAmount()}
                    />
                    {item.itemBody.map(
                        body => {
                            return (
                                <ItemBody key = {body.type+';'+body.amount}/>
                            )
                        }
                    )}
                </AuxWrapper>
            )
        }
    )
}

export default ItemBlock